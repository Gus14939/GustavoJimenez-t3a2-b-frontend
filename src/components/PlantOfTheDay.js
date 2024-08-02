import React from 'react';

const PlantOfTheDay = () => {
    const pic = "https://perenual.com/storage/species_image/5257_monstera_deliciosa/og/4630938853_623dc33137_b.jpg"
    return (
        <>
        <div className='plantOfTheDayContainer'>
            <div className='plantOfTheDay'>
                <div className='plantOfTheDayText'>
                    <h1>Plant of the day</h1>
                    <h2>Monstera deliciosa</h2>
                    <h3>fruit salad plant, Swiss cheese</h3>
                    <p >Ornamental tropical feature plant for indoors or out, with large decorative foliage and sweet fruit on mature plants. Plant in a pot and bring indoors to create a tropical luxe mood.PLEASE NOTE: We propagate this once a year and new stock is ready NOW until we sell out. Then thats it until next year.</p>
                    <h4>See the users that have this plant</h4>
                    <p className='users'>@user1001 / @user1002 / @user1003 / @user1004 / </p>
                </div>
            
            </div>

            <div className='plantOfTheDayPic'>
                <img src={pic} alt="this" />
            </div>
        </div>
        </>
    );
}

export default PlantOfTheDay;
