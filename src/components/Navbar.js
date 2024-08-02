import assets from "../images/assets";

const Navbar = () => {
  return (
    <div className="topBar">
      <div className="quickfix">
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
          <nav className="navLinks">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
              <li>
                <a href="/profile">Profile</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import assets from '../images/assets';

// const Navbar = () => {
//     return (
//         <div className="topNavContainer">
//         <nav className="topNav">
//             <div className="logo">
//                 <a href="/"><img src={assets.logo_Planthora} alt="Logo" /></a>
//             </div>
//             <div className="topSearch">
//                 <a href="/search"><img src={assets.icon_topBarSearch} alt="search" /></a>
//             </div>
//             <div className="navLinks">
//                 <ul>
//                     <li><a href="/">Home</a></li>
//                     <li><a href="/login">Login</a></li>
//                     <li><a href="/profile">Profile</a></li>
//                     <li><a href="/about">About</a></li>
//                     <li><a href="/faq">FAQ</a></li>
//                 </ul>
//             </div>
//         </nav>
//         </div>
//      );

// }

// export default Navbar;
