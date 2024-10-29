import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { logOut } from "../api/axios";
import { User } from '../models/User';

interface AuthContextProviderProps {
    children: ReactNode;
}

interface AuthContextType {
    token: string | null,
    setToken: React.Dispatch<React.SetStateAction<string | null>>,
    isAuthenticated: boolean | null,
    setIsAuthenticated?: React.Dispatch<React.SetStateAction<boolean | null>>,
    user: User | null,
    logOutUser: () => void
}



export const AuthContext = createContext<AuthContextType>({} as AuthContextType);


export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const[token, setToken] = useState(localStorage.getItem('token'));
    const[user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(false);
    const navigate = useNavigate();

    const getUser = () => {
        axios.get("/api/user",{
            headers: {Authorization: `Bearer ${token}`}
        })
        .then((res) => {
            setUser({id: res.data.id, email: res.data.email, name: res.data.name});
      }).catch((error) => {
            console.log(error);
      });  
    };

    useEffect(() => {
        if(token) {            
            setIsAuthenticated(true);
            getUser();
        }
    },[token]);

    return (
        <AuthContext.Provider value={{
            token,
            setToken,
            user,
            isAuthenticated,
            logOutUser: async () => {
                await logOut(token);
                setUser(null);
                setToken(null);
                setIsAuthenticated(false);
                localStorage.removeItem('token');
                navigate('/');
            }
            }}>
            {children}
        </AuthContext.Provider>
    );
};