
import assets from '../images/assets';
import React, { useEffect, useState } from "react";



// const API_KEY = process.env.REACT_APP_PERENUAL_API_KEY;
const API_KEY = "sk-REKG66a5179656da26352";
console.log('API Key:', API_KEY);
const guideAPIurl = "https://perenual.com/api/species/details/";

function MyPostsComponent() {
  const [passID, setPassID] = useState(() => Math.floor(Math.random() * 500 + 1));
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
  }, [passID]);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  useEffect(() => {
    if (data) {
      // const titleElement = document.querySelector('.listingContent h1');
      const descriptionElement = document.querySelector('.myPostsContent p');

      // if (titleElement) {
      //   titleElement.innerText = truncateText(data.common_name, 36); // Adjust maxLength as needed
      // }

      if (descriptionElement) {
        descriptionElement.innerText = truncateText(data.description, 200); // Adjust maxLength as needed
      }
    }
  }, [data]);

  return (
    <div className='myPostsContainer'>
      {data && (
        <div className="myPosts">
          <div className="imgContainer">
            <img
              src={data.default_image.small_url}
              alt={data.scientific_name}
            />
          </div>
          <div className="myPostsContent">
            <h1 title={data.common_name}>{data.common_name}</h1>
            <h6>{data.scientific_name}</h6>
            <p>{data.description}</p>
              
              <div className="myPostsActions">
                <div className="remove">
                  <a href="/"><img src={assets.icon_remove} alt="" /></a>
                </div>
                <div className="editPost">
                  <a href="/"><img src={assets.icon_edit} alt="" /></a>
                </div>
                <div className="pending">
                <a href="/"><img src={assets.icon_pending} alt="" /></a>
                </div>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyPostsComponent;