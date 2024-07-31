const Navbar = () => {
    return ( 
        <div className="topNavContainer">
        <nav className="topNav">
            <div className="logo"><a href="/">Planthora</a></div>
            <div className="navLinks">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/faq">FAQ</a></li>
                </ul>
            </div>
        </nav>
        </div>
     );

}
 
export default Navbar;