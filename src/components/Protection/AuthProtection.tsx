import React, {useContext} from "react";
import {AuthContext} from "../../contexts/auth";
import {Navigate, Outlet} from "react-router-dom";


const AuthProtection = () => {

    const auth = useContext(AuthContext);
    /**
     *Redirects if unauth
     *Doesnt let u see Wrapped Routes when u arent logged in
     *Checks if session has expired every 61 mins
     */

    return (
        <>
            {
                auth.isAuthenticated === false ?
                    <Navigate to={'./login'}></Navigate>
                    :
                    <Outlet/>
            }
        </>


    );
};

export default AuthProtection;
