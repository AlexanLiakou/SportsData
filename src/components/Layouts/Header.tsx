import React from "react";
import MainNavbar from "../Navbars/MainNavbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

const Header = ()=> {
    return (
    <div className="bg-customLightGreen w-[100%] flex items-center justify-between px-5 py-6 mb-[100px]">
        <div className="flex items-center gap-x-4">
            <FontAwesomeIcon className="text-[5rem]" icon={faFutbol} style={{color: "#075052"}}/>
            <p className="text-[20px] text-white">SportsData</p>
        </div>
        <MainNavbar/>
    </div>
    )
}

export default Header;