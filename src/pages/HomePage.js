import React from 'react';
import PlantOfTheDay from '../components/PlantOfTheDay';
import HomeHeroIntro from '../components/HomeHeroIntro';

const HomePage = () => {
    return (
        <div className='home'>
            <HomeHeroIntro />
            <PlantOfTheDay />
        </div>
    );
}

export default HomePage;
