import { useState, useContext } from 'react';
import { AuthContext } from "../../contexts/auth";
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="flex items-center">
      <FontAwesomeIcon className="text-[18px] pointer" icon={faBars} onClick={toggleMenu} style={{color: "#fff"}}/>
      <div className={`bg-customLightGreen absolute top-[0px] right-[0px] w-[100%] h-[100%] z-50 flex-col ${open ? 'flex' : 'hidden '}`}>
        <FontAwesomeIcon className="text-[18px] cursor-pointer mt-[37px] mr-[21px] self-end" icon={faX} onClick={toggleMenu} style={{color: "#fff"}}/>
        <ul className={`flex flex-col justify-center items-center h-[75%]`}>
            <li className="w-[100%] py-3 cursor-pointer font-bold text-center text-white text-[16px]" onClick={() => navigate('/dashboard')}>Home</li>
            <li className="w-[100%] py-3 cursor-pointer font-bold text-center text-white text-[16px]" onClick={() => navigate('/dashboard')}>Account</li>
            <li className="w-[100%] py-3 cursor-pointer font-bold text-center text-white text-[16px]" onClick={auth.logOutUser}>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;