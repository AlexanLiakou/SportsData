import React from "react";
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <ul>
                <li className="text-white">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/register">Registration</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;