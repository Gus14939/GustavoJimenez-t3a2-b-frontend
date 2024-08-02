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
            <form>
                <input type="text" name='search' placeholder='Search plants' />
            </form>
            </div>
            <Listings />
        </div>
    );
}

export default HomePage;
