import React, {useState} from "react";
import User from "../models/User";

const Register = () => {

    const[formData, setFormData] = useState<User>({
        userId: '',
        name: '',
        surname: '',
        email: '',
        userName: '',
        password: '',
        favouriteSport: '',
        favouriteFootballTeam: '',
        favouriteBasketballTeam: '',
    });

    return(
        <div>
            <label className="block">
                <span className="text-gray-700">Name*</span>
                <input
                    name='name' 
                    type="text" 
                    className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    onChange={(e) => setFormData({...formData, name: e?.target.value})}/>
            </label>
            <label className="block">
                <span className="text-gray-700">Surname*</span>
                <input
                    name='suname' 
                    type="text" 
                    className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    onChange={(e) => setFormData({...formData, surname: e?.target.value})}/>            
            </label>
            <label className="block">
                <span className="text-gray-700">Email address*</span>
                <input
                name='email'
                type="email" 
                className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" 
                placeholder="john@example.com"
                onChange={(e) => setFormData({...formData, email: e?.target.value})}/>
            </label>
              <label className="block">
                <span className="text-gray-700">Favourite Sport</span>
                <select 
                name="favouriteSport" 
                className="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                onChange={(e) => setFormData({...formData, favouriteSport: e?.target.value})}>
                  <option>Football</option>
                  <option>Basketball</option>
                </select>
              </label>
              <label className="block">
                <span className="text-gray-700">Favourite Football Team</span>
                <input
                    name='favouriteFootballTeam' 
                    type="text" 
                    className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    onChange={(e) => setFormData({...formData, favouriteFootballTeam: e?.target.value})}/>
                </label>
              <label className="block">
                <span className="text-gray-700">Favourite Basketball Team</span>
                <input
                    name='favouriteBasketballTeam' 
                    type="text" 
                    className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    onChange={(e) => setFormData({...formData, favouriteBasketballTeam: e?.target.value})}/>                  
                </label>
              <label className="block">
                <span className="text-gray-700">Username*</span>
                <input
                    name='userName' 
                    type="text" 
                    className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    onChange={(e) => setFormData({...formData, userName: e?.target.value})}/>
            </label>
              <label className="block">
                <span className="text-gray-700">Password*</span>
                <input
                    name='password' 
                    type="text" 
                    className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    onChange={(e) => setFormData({...formData, password: e?.target.value})}/>
            </label>
              <label className="block">
                <span className="text-gray-700">Retype Password*</span>
                <input name="retypePassword" type="text" className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" placeholder=""/>
              </label>
        </div>
    )
}

export default Register;