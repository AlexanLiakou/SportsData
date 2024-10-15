import React, {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import{ Credentials} from "../models/User";
import TextInput from "../components/UI/Form/Ιnputs/TextInput";
import FormButton from "../components/UI/Buttons/FormButton";

const Login = () => {

    const {register, handleSubmit, setError, formState: {errors, isSubmitting}} = useForm<Credentials>();

    const onSubmit: SubmitHandler<Credentials> = async (data) => {
      await new Promise ((resolve) => setTimeout(resolve, 3000));
      console.log(data);
    }

    return(
        <div className="flex content-center justify-center">
          <div className="bg-customLightGreen max-w-[600px] rounded-3xl">
            <p className="p-5 w-100 text-white font-bold">Login to your account:</p>
            <form id='login' className="flex flex-wrap gap-5 p-5" onSubmit={handleSubmit(onSubmit)}>
              <TextInput label={'Username*'} name='userName' type='text' registerFunction={register} 
                validationRules={{required: 'Username required', pattern: {value: /^[a-zA-Z0-9$&%!#@*\-_]+$/, message: 'Use of invalid characters'} }} errorsObject={errors}/>
              <TextInput label={'Password*'} name='password' type='text' registerFunction={register}
                validationRules={{required: 'Password required', pattern: {value: /^[a-zA-Z0-9$&%!#@*\-_]+$/, message: 'Use of invalid characters'}, minLength: {value: 5, message: 'Must have at least 5 characters'}}} errorsObject={errors}/>
            </form>
            <FormButton isSubmitting={isSubmitting} type={'submit'} form={'login'} label={'Login'}/>
          </div>
        </div>
    )
}

export default Login;