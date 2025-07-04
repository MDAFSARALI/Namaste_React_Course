import {LOGO_URL} from '../utils/constants'
const Header = () => (
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
      </ul>
    </div>
  </div>
);

export default Header;