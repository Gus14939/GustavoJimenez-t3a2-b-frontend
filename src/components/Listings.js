import React from 'react';
import ListingComponent from './ListingComponent';

const Listings = () => {
  return (
    <div className='listings'>
      <div className='listingsContainer'>
        <ListingComponent />
        <ListingComponent />
        <ListingComponent />
      </div>
    </div>
  );
}

export default Listings;
