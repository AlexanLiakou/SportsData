import React, {useState} from "react";
import{ Credentials} from "../models/User";
import TextInput from "../components/UI/Form/Ιnputs/TextInput";
import FormButton from "../components/UI/Buttons/FormButton";

const Login = () => {

    const[formData, setFormData] = useState<Credentials>({
        userName: '',
        password: '',
    });

    return(
        <div className="flex content-center justify-center">
          <div className="bg-customLightGreen max-w-[600px] rounded-3xl">
            <p className="p-5 w-100 text-white font-bold">Login to your account:</p>
            <div className="flex flex-wrap gap-5 p-5">
              <TextInput label={'Username*'} name='userName' type='text' onChange={(e:any) => setFormData({...formData, userName: e?.target.value})}/>
              <TextInput label={'Password*'} name='password' type='text' onChange={(e:any) => setFormData({...formData, password: e?.target.value})}/>
            </div>
            <FormButton label={'Login'} onClick={(e:any) => console.log("Login pressed!!")}/>
          </div>
        </div>
    )
}

export default Login;