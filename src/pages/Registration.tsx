import React, {useState, useContext} from "react";
import FormError from "../components/UI/Form/Other/FormError";
import { registerUser } from "../api/axios";
import { AuthContext } from "../contexts/auth";
import { Registration } from "../models/Credentials";
import { useNavigate } from "react-router-dom";

// import {SubmitHandler, useForm} from "react-hook-form";
// import {User} from "../models/User";
// import TextInput from "../components/UI/Form/Ιnputs/TextInput";
// import SelectInput from "../components/UI/Form/Ιnputs/SelectInput";
// import CountrySelectorInput from "../components/UI/Form/Ιnputs/CountrySelectorInput";
// import FormButton from "../components/UI//Buttons/FormButton";


const Register = () => {

  // const [formData, setFormData] = useState<User>({
  //   name: '',
  //   surname: '',
  //   email: '',
  //   country: '',
  //   userName: '',
  //   password: '',
  //   retypedPassword: '',
  //   favouriteSport: '',
  //   favouriteFootballTeam: '',
  //   favouriteBasketballTeam: '',
  // });

  // const {register, handleSubmit, setError, formState: {errors, isSubmitting}} = useForm<User>();

  // const onSubmit: SubmitHandler<User> = async (data) => {
    // axios.post("http://localhost:8000/users", formData)
    //   .then((response) => {
    //   console.log(response);
    //   navigate('/login');
    // });
  // }

  // const sportsOptions = [
  //   {label: 'Football'},
  //   {label: 'Basketball'}
  // ];
  const auth = useContext(AuthContext);
  const [formData, setFormData] = useState({} as Registration);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    name:[],
    email: [],
    password: [],
  });

  

  const handleRegister = async (e:any) => {
    e.preventDefault();
   await registerUser(formData)
      .then((res) => {
        // localStorage.setItem('token', res.data.token);
        // auth.setToken(res.data.token);
        // navigate('/');
        if (res.status === 200) {
          navigate('/');
        }
    }).catch((error) => {
      setErrors(error.response.data.errors);
    });  
  }


    return (
        // <div className="flex justify-center items-center h-[100%] px-3">
        //   <div className="bg-customLightGreen max-w-[600px] rounded-3xl">
        //     <p className="p-5 w-100 text-white font-bold">Please fill the registration form:</p>
        //     <form id="registration" className="flex flex-wrap gap-5 p-5" onSubmit={handleSubmit(onSubmit)}>
        //       <TextInput label={'Name*'} name='name' type='text' registerFunction={register} errorsObject={errors} onChange={(e:any) => setFormData({...formData, name: e.target.value})}
        //         validationRules={{required: 'Input required', pattern: {value: /^[a-zA-Z]+(?:[ -][a-zA-Z]+)*$/, message: 'Use of invalid characters'} }}/>
        //       <TextInput label={'Surname*'} name='surname' type='text' registerFunction={register} errorsObject={errors} onChange={(e:any) => setFormData({...formData, surname: e.target.value})}
        //         validationRules={{required: 'Input required', pattern: {value: /^[a-zA-Z]+(?:[ -][a-zA-Z]+)*$/, message: 'Use of invalid characters'} }}/>
        //       <TextInput label={'Email address*'} name='email' type='email' registerFunction={register} errorsObject={errors} onChange={(e:any) => setFormData({...formData, email: e.target.value})}
        //         validationRules={{required: 'Input required', pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Invalid email'} }}/>
        //       <SelectInput options= {sportsOptions} label={'Favourite Sport'} name='favouriteSport' onChange={(e:any) => setFormData({...formData, favouriteSport: e.target.value})}/>
        //       <CountrySelectorInput setFormData={setFormData} formData={formData}/>
        //       <TextInput label={'Favourite Football Team'} type='text' name='favouriteFootballTeam' registerFunction={register} errorsObject={errors} onChange={(e:any) => setFormData({...formData, favouriteFootballTeam: e.target.value})}
        //         validationRules={{required: 'Input required', pattern: {value: /^[a-zA-Z0-9]+(?:[ -][a-zA-Z0-9]+)*$/, message: 'Use of invalid characters'} }}/>
        //       <TextInput label={'Favourite Basketball Team'} type='text' name='favouriteBasketballTeam' registerFunction={register} errorsObject={errors} onChange={(e:any) => setFormData({...formData, favouriteBasketballTeam: e.target.value})}
        //         validationRules={{required: 'Input required', pattern: {value: /^[a-zA-Z0-9]+(?:[ -][a-zA-Z0-9]+)*$/, message: 'Use of invalid characters'} }}/>
        //       <TextInput label={'Username*'} name='userName' type='text' registerFunction={register} errorsObject={errors} onChange={(e:any) => setFormData({...formData, userName: e.target.value})}
        //         validationRules={{required: 'Input required', pattern: {value: /^[a-zA-Z0-9$&%!#@*\-_]+$/, message: 'Use of invalid characters'} }}/>
        //       <TextInput label={'Password*'} name='password' type='text' registerFunction={register} errorsObject={errors} onChange={(e:any) => setFormData({...formData, password: e.target.value})}
        //         validationRules={{required: 'Input required', pattern: {value: /^[a-zA-Z0-9$&%!#@*\-_]+$/, message: 'Use of invalid characters'} }}/>
        //       <TextInput label={'Retype Password*'} name='retypedPassword' type='text'registerFunction={register} errorsObject={errors} onChange={(e:any) => setFormData({...formData, retypedPassword: e.target.value})}
        //         validationRules={{required: 'Input required', pattern: {value: /^[a-zA-Z0-9$&%!#@*\-_]+$/, message: 'Use of invalid characters'},
        //         validate: (value:string) => {
        //           if(value !== formData!.password) {
        //             return errors.retypedPassword!.message = "Passwords don't match";
        //           }
        //         }}}/>
        //     </form>
        //     <FormButton isSubmitting={isSubmitting} form={'registration'} type="submit" label={'Register'}/>
        //   </div>
        // </div>

        <>
          <form onSubmit={ (e) => handleRegister(e) } className="flex flex-col gap-y-[15px] items-center justify-center mt-[100px]">
            <h1 className="text-white text-center">Register a new account</h1>
            <div>
              <input 
                type="text" 
                placeholder="Name"
                value={formData!.name}
                onChange={ (e) =>setFormData({
                  ...formData, name: e.target.value
                })}
              />
              {errors!.name && <FormError errorMessage={errors!.name[0]}/>}
            </div>
            <div>
              <input 
                type="text" 
                placeholder="Email"
                value={formData!.email}
                onChange={ (e) =>setFormData({
                  ...formData, email: e.target.value
                })}
              />
              {errors!.email && <FormError errorMessage={errors!.email[0]}/>}
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
              {errors!.password && <FormError errorMessage={errors!.password[0]}/>}
            </div>
            <div>
            <input 
                type="password" 
                placeholder="Confirm Password"
                value={formData!.password_confirmation}
                onChange={ (e) =>setFormData({
                  ...formData, password_confirmation: e.target.value
                })}
              />
            </div>
            <button className="bg-customLightGreen rounded-3xl p-2 min-w-[209px]" type="submit">Register</button>
          </form>
        </>
    )
}

export default Register;