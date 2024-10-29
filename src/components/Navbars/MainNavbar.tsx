import {useContext} from "react";
import { AuthContext } from "../../contexts/auth";
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';


const MainNavbar = () => {

    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    
    return (
        <nav>
            <ul className="flex items-start flex-row md:items-center gap-x-8">
                <li className="cursor-pointer"><FontAwesomeIcon className="text-[18px]" onClick={() => navigate('/dashboard')} icon={faHouse} style={{color: "#fff"}}/></li>
                <li className="cursor-pointer"><FontAwesomeIcon className="text-[18px]" onClick={() => navigate('/dashboard')} icon={faUser} style={{color: "#fff"}}/></li>
                <li className="cursor-pointer"><FontAwesomeIcon className="text-[18px]" onClick={auth.logOutUser} icon={faRightFromBracket} style={{color: "#fff"}}/></li>
            </ul>
        </nav>
    );
}

export default MainNavbar;