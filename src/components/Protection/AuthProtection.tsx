import {useContext} from "react";
import {AuthContext} from "../../contexts/auth";
import {Navigate, Outlet} from "react-router-dom";


const AuthProtection = () => {

    const auth = useContext(AuthContext);

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
