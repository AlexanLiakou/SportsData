import React, {useState} from "react";
import User from "../models/User";
import TextInput from "../components/UI/Form/TextInput";
import SelectInput from "../components/UI/Form/SelectInput";
import CountrySelector from "../components/UI/Form/CountriesSelectInput";
import RegisterButton from "../components/UI/Buttons/RegisterButton";


const Register = () => {

    const[formData, setFormData] = useState<User>({
        userId: '',
        name: '',
        surname: '',
        email: '',
        country: '',
        userName: '',
        password: '',
        favouriteSport: '',
        favouriteFootballTeam: '',
        favouriteBasketballTeam: '',
    });

    const sportsOptions = [
      {label: 'Football'},
      {label: 'Basketball'}
      ];

    return(
        <div className="flex content-center justify-center">
          <div className="bg-customLightGreen max-w-[600px] rounded-3xl mt-[120px]">
            <p className="p-5 w-100 text-white font-bold">Please fill the registration form:</p>
            <div className="flex flex-wrap gap-5 p-5">
              <TextInput label={'Name*'} name='name' type='text' onChange={(e:any) => setFormData({...formData, name: e?.target.value})}/>
              <TextInput label={'Surname*'} name='surname' type='text' onChange={(e:any) => setFormData({...formData, surname: e?.target.value})}/>
              <TextInput label={'Email address*'} name='email' type='email' onChange={(e:any) => setFormData({...formData, email: e?.target.value})}/>
              <SelectInput options= {sportsOptions} label={'Favourite Sport'} name='favouriteSport' onChange={(e:any) => setFormData({...formData, favouriteSport: e?.target.value})}/>
              <CountrySelector setFormData={setFormData} formData={formData}/>
              <TextInput label={'Favourite Football Team'} name='favouriteFootballTeam' type='text' onChange={(e:any) => setFormData({...formData, favouriteFootballTeam: e?.target.value})}/>
              <TextInput label={'Favourite Basketball Team'} name='favouriteBasketballTeam' type='text' onChange={(e:any) => setFormData({...formData, favouriteBasketballTeam: e?.target.value})}/>
              <TextInput label={'Username*'} name='userName' type='text' onChange={(e:any) => setFormData({...formData, userName: e?.target.value})}/>
              <TextInput label={'Password*'} name='password' type='text' onChange={(e:any) => setFormData({...formData, password: e?.target.value})}/>
              <TextInput label={'Retype Password*'} name='retypePassword' type='text'/>
            </div>
            <RegisterButton label={'Register'} onClick={(e:any) => console.log("Register pressed!!")}/>
          </div>
        </div>
    )
}

export default Register;