import React from 'react';
import { Link } from 'react-router-dom';

const HomeHeroIntro = () => {

    return (
        <>
        <div className='HomeHeroContainer'>
            <h1>Welcome to the <br /> Plant Swap Community</h1>
            <h3>Donate, Swap, Adopt & Discuss Plants!</h3>
            <div className='HomeHeroButtons'>
                <Link to={'/profile/signup'}>
                    <button className='reg'>Free Registration</button>
                </Link>
                <Link to={'/profile/login'}>
                    <button className='log'>Login</button>
                </Link>
            </div>
        </div>
        </>
    );
}

export default HomeHeroIntro;
