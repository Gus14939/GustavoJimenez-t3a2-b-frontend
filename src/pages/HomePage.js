import React from 'react';
import PlantOfTheDay from '../components/PlantOfTheDay';
import HomeHeroIntro from '../components/HomeHeroIntro';
import Listings from '../components/Listings';

const HomePage = () => {
    return (
        <div className='home'>
            <HomeHeroIntro />
            <PlantOfTheDay />
            <div className='searchies'>
                <h3>Search plant</h3>
            </div>
            <Listings />
        </div>
    );
}

export default HomePage;
