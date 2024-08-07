
import assets from '../images/assets';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


// const API_KEY = process.env.REACT_APP_PERENUAL_API_KEY;
const API_KEY = "sk-REKG66a5179656da26352";
console.log('API Key:', API_KEY);
const guideAPIurl = "https://perenual.com/api/species/details/";

function ListingDetailsComponent() {
  const [passID] = useState(() => Math.floor(Math.random() * 500 + 1));
  const [data, setData] = useState(null);

  const getPlantica = async () => {
    try {
      let result = await fetch(`${guideAPIurl}${passID}?key=${API_KEY}`)
        .then((response) => response.json());
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getPlantica();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passID]);

  const navigate = useNavigate();
  const goBack = () => { navigate(-1);}

  useEffect(() => {
    const detailsButton = document.getElementById('returnButton');
    if (detailsButton) {
      detailsButton.addEventListener('click', goBack);
    }
    return () => {
      if (detailsButton) {
        detailsButton.removeEventListener('click', goBack);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {data && (
        <div className="listing">
          <div className="imgContainer">
            <img
              src={data.default_image.small_url}
              alt={data.scientific_name}
            />
          </div>
          <div className="listingContent">
          <h1 className='title'>Plant details</h1>
            <h1 title={data.common_name}>{data.common_name}</h1>
            <h6>{data.scientific_name}</h6>
            <p>{data.description}</p>
            <div className="listingDetailsContainer">
              <div className="listingDetails">
                <div>
                  <p>User:</p>
                  <p>Date:</p>
                  <p>Location:</p>
                </div>
                <div>
                  <p>**user**</p>
                  <p>**dateCreated**</p>
                  <p>**dateCreated**</p>
                </div>
              </div>
              <div className="listingActions">
                <div className="listingMessages">
                  <img src={assets.icon_messages} alt="" />
                  <p>Message <br />
                  the user</p>
                </div>
                <div className="listingLocation">
                  <img src={assets.icon_location} alt="" />
                  <p>See map <br />
                  directions</p>
                </div>
                <div className="listingWishlist">
                  <a href="/"><img src={assets.icon_redHeart} alt="" /></a>
                  <p>Add to your <br />
                  wishlist</p>
                </div>
              </div>
            </div>
            <button id='returnButton'>Back to Listings</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListingDetailsComponent;