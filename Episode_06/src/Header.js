import {LOGO_URL} from '../utils/constants'
import { useState } from 'react';
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
  <div className="header">
    <div className="logo">
      <img className="logo-img" alt="Logo" src={LOGO_URL}/>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <button onClick={()=>{
          setIsLoggedIn(!isLoggedIn);
        }}>{isLoggedIn ?  "Logout" : "Login"}</button>
      </ul>
    </div>
  </div>
)};

export default Header;