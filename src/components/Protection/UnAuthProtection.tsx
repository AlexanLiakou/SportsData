import {useContext, useEffect} from 'react';
import {AuthContext} from "../../contexts/auth";
import {Outlet, useNavigate} from "react-router-dom";

const UnAuthProtection = () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate()

    useEffect(()=>{
        if(auth.isAuthenticated === true){
            navigate('/dashboard')
        }
    }, [])

    return (
        <Outlet/>
    );
}

export default UnAuthProtection;