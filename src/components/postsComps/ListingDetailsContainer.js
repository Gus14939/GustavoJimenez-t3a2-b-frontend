import React from 'react';
import assets from '../../images/assets';

const ListingDetailsContainer = ({ plantId, createdAt, postId }) => {
  return (
    <div className="listingDetailsContainer">
      <div className="listingUserDetails">
        <div>
          <p>User:</p>
          <p>Date:</p>
          <p>Location:</p>
        </div>
        <div>
          <p>{"fetching the user to come" || postId}</p> {/*this is the post id not the user*/}
          <p>{new Date(createdAt).toLocaleDateString() || "Date"}</p>
          <p>{"Location to come" || plantId }</p>
        </div>
      </div>
      <div className="listingActions">
        <div className="listingMessages">
          <img src={assets.icon_messages} alt="Message icon" />
          <p>Message <br /> the user</p>
        </div>
        <div className="listingLocation">
          <img src={assets.icon_location} alt="Location icon" />
          <p>See map <br /> directions</p>
        </div>
        <div className="listingWishlist">
          <a href="/"><img src={assets.icon_redHeart} alt="Wishlist icon" /></a>
          <p>Add to your <br /> wishlist</p>
        </div>
      </div>
    </div>
  );
}

export default ListingDetailsContainer;
