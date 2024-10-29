import {useState, ChangeEvent, FormEvent, useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth";
import { LoginCredentials, Errors } from "../models/Credentials";
import { logIn } from "../api/axios";
import {validationRegex} from "../helpers/regex";
import TextInput from "../components/UI/Form/Ιnputs/TextInput";
import FormButton from "../components/UI/Buttons/FormButton";

const Login = () => {

    const [formData, setFormData] = useState({} as LoginCredentials);
    const [errors, setErrors] = useState({} as Errors);
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
  
    const handleLogin = async (e:FormEvent) => {
      e.preventDefault();
      await logIn(formData)
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem('token', res.data.token);
            auth.setToken(res.data.token);
          }
      })
      .then(() => {
        navigate('/dashboard');
      }).catch((error) => {
        setErrors(error.response.data.errors);
      });  
    }
  
    useEffect(() => {
      if (auth.isAuthenticated === true) {
        navigate('/dashboard');
      }
    },[auth]);

    return(
        <div className="flex justify-center items-center h-[100%] px-3">
          <div className="bg-customLightGreen max-w-[600px] rounded-3xl">
            <p className="p-5 w-100 text-white font-bold">Login to your account:</p>
            <form id='login' className="flex flex-col w-auto md:w-[400px] gap-0 p-5 pb-0" onSubmit={(e) => handleLogin(e)}>
              <TextInput 
                label={'Email address*'}
                name='email'
                type='email'
                errorsObject={errors}
                onChange={
                  (e:ChangeEvent<HTMLInputElement>) => {
                    if (validationRegex.emailRegex.test(e.target.value)) {
                      setFormData({...formData, email: e.target.value});
                      setErrors({...errors, email: ['']});
                    } else {
                      setErrors({...errors, email: ['Please use valid email syntax']})
                    }                   
                  } 
                }/>
              <TextInput 
                label={'Password*'}
                name='password'
                type='password'
                errorsObject={errors}
                onChange={
                  (e:ChangeEvent<HTMLInputElement>) => {
                    if (validationRegex.passwordRegex.test(e.target.value)) {
                      setFormData({...formData, password: e.target.value});
                      setErrors({...errors, password: ['']})
                    } else {
                      setErrors({...errors, password: ['Please use valid password syntax']})
                    }
                  } 
                }/>
            </form>
            <FormButton type={'submit'} form={'login'} label={'Login'}/>
            <p className="text-white text-sm text-center pb-[20px]">You don't have an account?
              <span className="text-customDarkgreen font-bold cursor-pointer ml-[5px]" onClick={() => navigate('/register')}>Register here</span>
            </p>
          </div>
        </div>
    )
}

export default Login;