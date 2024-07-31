import React from 'react';

const HomeHeroIntro = () => {

    const handleRegister = () => {console.log("register")}
    const handleLogin = () => {console.log("login")}

    return (
        <>
        <div className='HomeHeroContainer'>
            <h1>Welcome to the <br /> Plant Swap Community</h1>
            <h3>Donate, Swap, Adopt & Discuss Plants!</h3>
            <div className='HomeHeroButtons'>
                <button onClick={handleRegister} className='reg'>Free Registration</button>
                <button onClick={handleLogin} className='log'>Login</button>
            </div>
        </div>
        </>
    );
}

export default HomeHeroIntro;
