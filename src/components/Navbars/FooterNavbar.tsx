import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingDollar} from '@fortawesome/free-solid-svg-icons';

const FooterNavbar = () => {
    return(
        <nav className="grow flex lg:justify-center justify-between lg:ml-[160px]">
            <ul className="flex items-center gap-x-5">
                <NavLink className="text-white flex gap-x-3 items-center" to="/contact">
                    <FontAwesomeIcon className="text-[1rem]" icon={faAddressBook } />
                    <p className="text-[16px]">Contact</p>
                </NavLink> 
                <NavLink className="text-white flex gap-x-2 items-center" to="/donate">
                    <FontAwesomeIcon className="text-[1rem]" icon={faHandHoldingDollar} />
                    <p className="text-[16px]">Donate</p>
                </NavLink>  
            </ul>
        </nav>
    )
}

export default FooterNavbar;