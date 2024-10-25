import React, {useState, useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import FormError from "../components/UI/Form/Other/FormError";
import { AuthContext } from "../contexts/auth";
import { LoginCredentials } from "../models/Credentials";
import { logIn } from "../api/axios";
// import {SubmitHandler, useForm} from "react-hook-form";
// import TextInput from "../components/UI/Form/Ιnputs/TextInput";
// import FormButton from "../components/UI/Buttons/FormButton";

const Login = () => {

    // const[email, setEmail] = useState();
    // const[password, setPassword] = useState();
    // const navigate = useNavigate(); 
    // const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm();

    // const onSubmit= (e:any) => {
    //  console.log("HELLO");

    // }

    const [formData, setFormData] = useState({} as LoginCredentials);
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
  
    const [errors, setErrors] = useState({
      name:[],
      email: [],
      password: [],
    });

    const handleLogin = async (e:any) => {
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
      if (auth.isAuthenticated === true && auth.isLoggedIn === true) {
        navigate('/dashboard');
      }
    },[auth]);

    return(
        // <div className="flex justify-center items-center h-[100%] px-3">
        //   <div className="bg-customLightGreen max-w-[600px] rounded-3xl">
        //     <p className="p-5 w-100 text-white font-bold">Login to your account:</p>
        //     <form id='login' className="flex flex-wrap gap-5 p-5" onSubmit={handleSubmit(onSubmit)}>
        //       <TextInput value={email} label={'Email address*'} name='email' type='email' registerFunction={register} errorsObject={errors}
        //         validationRules={{required: 'Input required', pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Invalid email'} }}
        //         onChange={(e:any) => setEmail(e.target.value)}/>
        //       <TextInput value={password} label={'Password*'} name='password' type='text' registerFunction={register}
        //         validationRules={{required: 'Password required', pattern: {value: /^[a-zA-Z0-9$&%!#@*\-_]+$/, message: 'Use of invalid characters'}, minLength: {value: 5, message: 'Must have at least 5 characters'}}} errorsObject={errors}
        //         onChange={(e:any) => setPassword(e.target.value)}/>
        //     </form>
        //     <FormButton isSubmitting={isSubmitting} type={'submit'} form={'login'} label={'Login'}/>
        //     <p className="text-white text-sm text-center pb-[20px]">You don't have an account?
        //       <span className="text-customDarkgreen font-bold cursor-pointer ml-[5px]" onClick={(e:any) => navigate('/register')}>Register here</span>
        //     </p>
        //   </div>
        // </div>

        <>
        <form onSubmit={ (e) => handleLogin(e) } className="flex flex-col gap-y-[15px] items-center justify-center mt-[100px]">
          <h1 className="text-white text-center">Login to your account</h1>
          <div>
            <input 
              type="text" 
              placeholder="Email"
              value={formData!.email}
              onChange={ (e) =>setFormData({
                ...formData, email: e.target.value
              })}
            />
            {errors.email && <FormError errorMessage={errors.email[0]}/>}
          </div>
          <div>
          <input 
              type="password" 
              placeholder="Password"
              value={formData!.password}
              onChange={ (e) =>setFormData({
                ...formData, password: e.target.value
              })}
            />
            {errors.password && <FormError errorMessage={errors.password[0]}/>}
          </div>
          <button className="bg-customLightGreen rounded-3xl p-2 min-w-[209px]" type="submit">Login</button>
        </form>
      </>
    )
}

export default Login;