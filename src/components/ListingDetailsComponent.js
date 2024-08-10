
import { Link, useParams } from 'react-router-dom';
// import assets from '../images/assets';
import ListingDetailsContainer from './postsComps/ListingDetailsContainer';
import React, { useEffect, useState } from "react";


const API_KEY = process.env.REACT_APP_PERENUAL_API_KEY;
const guideAPIurl = "https://perenual.com/api/species/details/";

const PlanthoraBkEnd = process.env.REACT_APP_BKND_ROOT
const PlanthoraURL = `${PlanthoraBkEnd}/posts/postDetails`;


function ListingDetailsComponent() {
  const [planthoraData, setPlanthoraData] = useState(null);
  const [perenualData, setPerenualData] = useState(null);
  const [plantId, setPlantId] = useState(null);

  const params = useParams();
  const postId = params.id
  console.log(postId)

  const getPlanthoraBkEnd = async () => {
    try {
      const result = await fetch(`${PlanthoraURL}/${postId}`)
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
            <h1>{planthoraData.title}</h1>
            <h3>{perenualData.common_name}</h3>
            <h6>{perenualData.scientific_name}</h6>
            <p>{planthoraData.description}</p>

            <h4>category {planthoraData.category.free}</h4>
            
            <ListingDetailsContainer 
              plantId={plantId} 
              createdAt={planthoraData.createdAt}
              postId={planthoraData._id}
            />
            
            <Link to="/posts/postYourPlant"><button id='returnButton'>Post more plants</button></Link>
          </div>
        </div>
        
      )}

    </div>
  );
}

export default ListingDetailsComponent;