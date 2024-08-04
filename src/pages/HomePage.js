import React from 'react';
import PlantOfTheDay from '../components/PlantOfTheDay';
import HomeHeroIntro from '../components/HomeHeroIntro';
import Listings from '../components/Listings';
import SearchComponent from '../components/SearchComponent';

const HomePage = () => {
    return (
        <div className='home'>
            <HomeHeroIntro />
            <PlantOfTheDay />
            <div className='searchies'>
            <SearchComponent />
            </div>
            <Listings />
        </div>
    );
}

export default HomePage;
