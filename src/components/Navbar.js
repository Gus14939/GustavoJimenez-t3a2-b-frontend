const Navbar = () => {
    return ( 
        <nav>
            <div className="logo rubik"><h1><a href="/">Planthora</a></h1></div>
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