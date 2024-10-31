import {useState, ChangeEvent, FormEvent} from "react";
import { registerUser } from "../api/axios";
import { Registration, Errors } from "../models/Credentials";
import { useNavigate } from "react-router-dom";
import TextInput from "../components/UI/Form/Ιnputs/TextInput";
import {validationRegex} from "../helpers/regex";
import CountrySelectorInput from "../components/UI/Form/Ιnputs/CountrySelectorInput";
import FormButton from "../components/UI//Buttons/FormButton";


const Register = () => {

  const [formData, setFormData] = useState({} as Registration);
  const [errors, setErrors] = useState({} as Errors);
  const navigate = useNavigate();

  const handleRegister = async (e : FormEvent) => {
    e.preventDefault();
   await registerUser(formData)
      .then((res) => {
        if (res.status === 200) {
          navigate('/');
        }
    }).catch((error) => {
      setErrors(error.response.data.errors);
    });  
  }

  console.log(formData);
    return (
        <div className="flex justify-center items-center h-[100%] px-3">
          <div className="bg-customLightGreen max-w-[600px] rounded-3xl">
            <p className="p-5 w-100 text-white font-bold">Please fill the registration form:</p>
            <form id="registration" className="flex flex-col md:flex-wrap md:flex-row w-auto md:w-[600px] gap-3 p-5 pb-0" onSubmit={(e) => handleRegister(e) }>
              <TextInput 
                label={'Name*'}
                name='name'
                type='text'
                formType="registration" 
                errorsObject={errors}
                onChange={
                  (e:ChangeEvent<HTMLInputElement>) => {
                    if (validationRegex.nameRegex.test(e.target.value)) {
                      setFormData({...formData, name: e.target.value});
                      setErrors({...errors, name: ['']});
                    } else {
                      setErrors({...errors, name: ['Please use only letters']})
                    }
                  } 
                }/>
              <TextInput
                label={'Surname*'}
                name='surname' 
                type='text'
                formType="registration"  
                errorsObject={errors} 
                onChange={
                  (e:ChangeEvent<HTMLInputElement>) => {
                    if (validationRegex.nameRegex.test(e.target.value)) {
                      setFormData({...formData, surname: e.target.value});
                      setErrors({...errors, name: ['']});
                    } else {
                      setErrors({...errors, surname: ['Please use only letters']})
                    }
                  } 
                }/>              
                <TextInput
                label={'Email address*'} 
                name='email' 
                type='email'
                formType="registration"  
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
              <CountrySelectorInput
                setFormData={setFormData}
                formData={formData}
                label={'Country of origin*'}
                name={'country'}
                formType="registration"/>
              <TextInput
                label={'Password*'} 
                name='password' 
                type='password'
                formType="registration"  
                errorsObject={errors}
                onChange={
                  (e:ChangeEvent<HTMLInputElement>) => {
                    if (validationRegex.passwordRegex.test(e.target.value)) {
                      setFormData({...formData, password: e.target.value});
                      setErrors({...errors, password: ['']});
                    } else {
                      setErrors({...errors, password: ['Please use valid password syntax']})
                    }
                  } 
                }/>
              <TextInput
                label={'Retype Password*'}
                name='retypedPassword'
                type='password'
                formType="registration" 
                errorsObject={errors} 
                onChange={
                  (e:ChangeEvent<HTMLInputElement>) => {
                    if (e.target.value === formData.password) {
                      setFormData({...formData, password_confirmation: e.target.value});
                      setErrors({...errors, password: ['']});
                    } else {
                      setErrors({...errors, password: ['Please type the same password']})
                    }
                  } 
                }/>
            </form>
            <FormButton form={'registration'} type="submit" label={'Register'}/>
          </div>
        </div>
    )
}

export default Register;