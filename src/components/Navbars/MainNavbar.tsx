import React, {useContext} from "react";
import { AuthContext } from "../../contexts/auth";

// import {NavLink} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouse, faBasketball, faFutbol } from '@fortawesome/free-solid-svg-icons';


const MainNavbar = () => {

    const auth = useContext(AuthContext);

    return (
        <nav>
            <ul className="flex flex-col items-start gap-y-5 md:flex-row md:items-center md:gap-x-5">
                <li className="text-white text-[18px] md:text-[16px] cursor-pointer"><a onClick={auth.logOutUser}>Log out</a></li>
                {/* <NavLink className="text-white flex gap-x-3 items-center" to="/">
                    <FontAwesomeIcon className="text-[2rem] md:text-[1rem]" icon={faHouse} style={{color: "#fff"}}/>
                    <p className="text-[18px] md:text-[16px]">Home</p>
                </NavLink>      */}
                {/* <NavLink className="text-white flex gap-x-2 items-center" to={`/team/${user!.favouriteFootballTeam}`}>
                    <FontAwesomeIcon className="text-[2rem] md:text-[1rem]" style={{color: "#fff"}} icon={faFutbol}/>
                    <p className="text-[18px] md:text-[16px]">Football Team</p>
                </NavLink>   
                <NavLink className="text-white flex gap-x-2 items-center" to={`/team/${user!.favouriteBasketballTeam}`}>
                    <FontAwesomeIcon className="text-[2rem] md:text-[1rem]" style={{color: "#fff"}} icon={faBasketball}/>
                    <p className="text-[18px] md:text-[16px]">Basketball Team</p>
                </NavLink> */}
            </ul>
        </nav>
    );
}

export default MainNavbar;