import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import FooterNavbar from "../Navbars/FooterNavbar";

const Footer = ()=> {
    const today = new Date();
    const year = today.getFullYear();
    
    return (
        <div className="bg-customLightGreen w-[100%] p-5 flex flex-col items-center gap-y-5 mt-[100px] fixed bottom-0 left-0 ">
            <FooterNavbar/>
            <p>
                <span className="mr-2"><FontAwesomeIcon icon={faCopyright} style={{color: "#fff"}}/></span>
                <span className="text-white text-[16px]">{year} SportsData</span>
            </p>
        </div>
    )
}

export default Footer;