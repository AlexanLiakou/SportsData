import {useContext} from "react";
import {AuthContext } from '../contexts/auth';

const Dashboard = () => {

    const { user } = useContext(AuthContext)
    return(
        <>
        <h1 className="text-center text-xl text-white">WELCOME {user?.name}!!!!</h1>
        </>
    )
}

export default Dashboard;