import React, {useState} from "react";
import axios from "axios";
import {SubmitHandler, useForm} from "react-hook-form";
import {User} from "../models/User";
import TextInput from "../components/UI/Form/Ιnputs/TextInput";
import SelectInput from "../components/UI/Form/Ιnputs/SelectInput";
import CountrySelectorInput from "../components/UI/Form/Ιnputs/CountrySelectorInput";
import FormButton from "../components/UI//Buttons/FormButton";


const Register = () => {

  const [formData, setFormData] = useState<User>({
    userId: '26',
    name: '',
    surname: '',
    email: '',
    country: '',
    userName: '',
    password: '',
    retypedPassword: '',
    favouriteSport: '',
    favouriteFootballTeam: '',
    favouriteBasketballTeam: '',
  });

  const {register, handleSubmit, setError, formState: {errors, isSubmitting}} = useForm<User>();

  const onSubmit: SubmitHandler<User> = async (data) => {
    axios.post("http://localhost:8000/users", formData)
      .then((response) => {
      console.log(response);
    });
  }

  const sportsOptions = [
    {label: 'Football'},
    {label: 'Basketball'}
  ];

    return(
        <div className="flex content-center justify-center">
          <div className="bg-customLightGreen max-w-[600px] rounded-3xl mb-[140px]">
            <p className="p-5 w-100 text-white font-bold">Please fill the registration form:</p>
            <form id="registration" className="flex flex-wrap gap-5 p-5" onSubmit={handleSubmit(onSubmit)}>
              <TextInput label={'Name*'} name='name' type='text' registerFunction={register} errorsObject={errors} onChange={(e:any) => setFormData({...formData, name: e.target.value})}
                validationRules={{required: 'Input required', pattern: {value: /^[a-zA-Z]+(?:[ -][a-zA-Z]+)*$/, message: 'Use of invalid characters'} }}/>
              <TextInput label={'Surname*'} name='surname' type='text' registerFunction={register} errorsObject={errors} onChange={(e:any) => setFormData({...formData, surname: e.target.value})}
                validationRules={{required: 'Input required', pattern: {value: /^[a-zA-Z]+(?:[ -][a-zA-Z]+)*$/, message: 'Use of invalid characters'} }}/>
              <TextInput label={'Email address*'} name='email' type='email' registerFunction={register} errorsObject={errors} onChange={(e:any) => setFormData({...formData, email: e.target.value})}
                validationRules={{required: 'Input required', pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Invalid email'} }}/>
              <SelectInput options= {sportsOptions} label={'Favourite Sport'} name='favouriteSport' onChange={(e:any) => setFormData({...formData, favouriteSport: e.target.value})}/>
              <CountrySelectorInput setFormData={setFormData} formData={formData}/>
              <TextInput label={'Favourite Football Team'} type='text' name='favouriteFootballTeam' registerFunction={register} errorsObject={errors} onChange={(e:any) => setFormData({...formData, favouriteFootballTeam: e.target.value})}
                validationRules={{required: 'Input required', pattern: {value: /^[a-zA-Z0-9]+(?:[ -][a-zA-Z0-9]+)*$/, message: 'Use of invalid characters'} }}/>
              <TextInput label={'Favourite Basketball Team'} type='text' name='favouriteBasketballTeam' registerFunction={register} errorsObject={errors} onChange={(e:any) => setFormData({...formData, favouriteBasketballTeam: e.target.value})}
                validationRules={{required: 'Input required', pattern: {value: /^[a-zA-Z0-9]+(?:[ -][a-zA-Z0-9]+)*$/, message: 'Use of invalid characters'} }}/>
              <TextInput label={'Username*'} name='userName' type='text' registerFunction={register} errorsObject={errors} onChange={(e:any) => setFormData({...formData, userName: e.target.value})}
                validationRules={{required: 'Input required', pattern: {value: /^[a-zA-Z0-9$&%!#@*\-_]+$/, message: 'Use of invalid characters'} }}/>
              <TextInput label={'Password*'} name='password' type='text' registerFunction={register} errorsObject={errors} onChange={(e:any) => setFormData({...formData, password: e.target.value})}
                validationRules={{required: 'Input required', pattern: {value: /^[a-zA-Z0-9$&%!#@*\-_]+$/, message: 'Use of invalid characters'} }}/>
              <TextInput label={'Retype Password*'} name='retypedPassword' type='text'registerFunction={register} errorsObject={errors} onChange={(e:any) => setFormData({...formData, retypedPassword: e.target.value})}
                validationRules={{required: 'Input required', pattern: {value: /^[a-zA-Z0-9$&%!#@*\-_]+$/, message: 'Use of invalid characters'},
                validate: (value:string) => {
                  if(value !== formData!.password) {
                    errors.retypedPassword!.message = "Passwords don't match";
                  }
                  return value;
                }}}/>
            </form>
            <FormButton isSubmitting={isSubmitting} form={'registration'} type="submit" label={'Register'}/>
          </div>
        </div>
    )
}

export default Register;