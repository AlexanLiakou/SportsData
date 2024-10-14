import React from "react";
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus} from '@fortawesome/free-solid-svg-icons';


const MainNavbar = () => {
    return(
        <nav>
            <ul className="flex flex-col items-start gap-y-5 md:flex-row md:items-center md:gap-x-5">
                <NavLink className="text-white flex gap-x-3 items-center" to="/">
                    <FontAwesomeIcon className="text-[2rem] md:text-[1rem]" icon={faHouse} style={{color: "#fff"}}/>
                    <p className="text-[18px] md:text-[16px]">Home</p>
                </NavLink>     
                <NavLink className="text-white flex gap-x-2 items-center" to="/login">
                    <FontAwesomeIcon className="text-[2rem] md:text-[1rem]" style={{color: "#fff"}} icon={faUser}/>
                    <p className="text-[18px] md:text-[16px]">Login</p>
                </NavLink>   
                <NavLink className="text-white flex gap-x-2 items-center" to="/register">
                    <FontAwesomeIcon className="text-[2rem] md:text-[1rem]" style={{color: "#fff"}} icon={faUserPlus}/>
                    <p className="text-[18px] md:text-[16px]">Register</p>
                </NavLink>
            </ul>
        </nav>
    )
}

export default MainNavbar;