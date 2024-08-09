
import { Link, useParams } from 'react-router-dom';
import assets from '../images/assets';
import React, { useEffect, useState } from "react";


const API_KEY = process.env.REACT_APP_PERENUAL_API_KEY;
// console.log('API Key:', API_KEY);
const guideAPIurl = "https://perenual.com/api/species/details/";

const PlanthoraBkEnd = process.env.REACT_APP_BKND_ROOT
const PlanthoraURL = `${PlanthoraBkEnd}/posts/postDetails`;


function ListingDetailsComponent() {
  const [planthoraData, setPlanthoraData] = useState(null);
  const [perenualData, setPerenualData] = useState(null);
  const [plantId, setPlantId] = useState(null);

  const params = useParams();
  const userId = params.id
  console.log(userId)

  const getPlanthoraBkEnd = async () => {
    try {
      const result = await fetch(`${PlanthoraURL}/${userId}`)
        .then((response) => response.json());

      setPlanthoraData(result.data);
      console.log("Plant ID from planthoraData:", result.data.plantInfo.id);

      // I set plantId to fetch info from Perenual API
      setPlantId(result.data.plantInfo.id);

    } catch (error) {
      console.error("Error fetching planthoraData:", error);
    }
  };

  const getPerenualAPI = async () => {
    if (!plantId) return; // this is to wait ofr plantId
    try {
      let result = await fetch(`${guideAPIurl}${plantId}?key=${API_KEY}`)
        .then((response) => response.json());
      setPerenualData(result);
    } catch (error) {
      console.error("Error fetching perenualData:", error);
    }
  };

  useEffect(() => {
    getPlanthoraBkEnd();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(() => {
    getPerenualAPI();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plantId]);


  return (
    <div>
      {perenualData && (
        <div className="listing">
          <div className="imgContainer">
            <img
              src={perenualData.default_image?.medium_url || perenualData.default_image?.original_url}
              alt={perenualData.scientific_name}
              title={perenualData.scientific_name}
            />
          </div>
          <div className="listingContent">
            <h1 className='title'>Plant details</h1>
            <h1 title={perenualData.common_name}>{perenualData.common_name}</h1>
            <h6>{perenualData.scientific_name}</h6>
            <p>{perenualData.description}</p>
            <h4>category {planthoraData.category.free}</h4>
            <div className="listingDetailsContainer">
              <div className="listingDetails">
                <div>
                  <p>User:</p>
                  <p>Date:</p>
                  <p>Location:</p>
                </div>
                <div>
                  <p>{planthoraData._id}</p>
                  <p>{planthoraData.createdAt}</p>
                  <p>{planthoraData._id}</p>
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
            <Link to="/posts/postYourPlant"><button id='returnButton'>Post more plants</button></Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListingDetailsComponent;