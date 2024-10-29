import {NavLink} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import MainNavbar from "../Navbars/MainNavbar";
import badge from "../../assets/images/badge.svg";
import MobileMenu from '../Navbars/MobileMenu';

const Header = ()=> {

    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    return (
    <div className="bg-customLightGreen w-[100%] flex items-center justify-between px-5 py-3 mb-[25px]">
        <div className="flex items-center gap-x-4">
            <img src={badge} className="custom-md:w-[100px] custom-md:h-[100px] w-[70px] h-[70px]"/>
            <NavLink className="text-[25px] custom-md:text-[40px] text-white" to="/">SportsData</NavLink>
        </div>
        {isMobile ? <MobileMenu/> : <MainNavbar/>}   
    </div>
    )
}

export default Header;