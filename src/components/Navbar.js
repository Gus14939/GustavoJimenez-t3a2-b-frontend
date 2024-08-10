import { NavLink } from "react-router-dom";
import assets from "../images/assets";

const Navbar = () => {
  return (
    <div className="topBar">
      <div className="topBarContainer">
        <div className="logo">
          <a href="/">
            <img src={assets.logo_Planthora} alt="Logo" />
          </a>
        </div>
        <div className="topSearch">
          <a href="/search">
            <img src={assets.icon_topBarSearch} alt="search" />
          </a>
        </div>
        <div className="navLinks">
          <ul>
            <li>
              <NavLink to={"/profile"}>Profile</NavLink>
            </li>
            <li>
              <NavLink to={"/profile/login"}>Login</NavLink>
            </li>
            <li>
              <NavLink to={"/profile/signup"}>Signup</NavLink>
            </li>
            <li>
              <NavLink to={"/posts/postYourPlant"}>Post Your Plant</NavLink>
            </li>
            {/*<li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/faq"}>FAQ</NavLink>
            </li>*/}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;