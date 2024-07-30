const Navbar = () => {
    return ( 
        <nav className="topNav">
            <div className="logo rubik"><a href="/">Planthora</a></div>
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
     );

}
 
export default Navbar;