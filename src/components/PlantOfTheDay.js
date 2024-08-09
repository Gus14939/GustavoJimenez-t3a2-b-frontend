import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_KEY = "sk-REKG66a5179656da26352";
console.log("API Key:", API_KEY);
const guideAPIurl = "https://perenual.com/api/species/details/";

const PlantOfTheDay = () => {
  const [passID] = useState(() =>
    Math.floor(Math.random() * 500 + 1)
  );
  const [data, setData] = useState(null);

  const getPlantica = async () => {
    try {
      let result = await fetch(`${guideAPIurl}${passID}?key=${API_KEY}`).then(
        (response) => response.json()
      );
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getPlantica();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passID]);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  useEffect(() => {
    if (data) {
      const titleElement = document.querySelector('.plantOfTheDayText h2');
      const descriptionElement = document.querySelector(".plantOfTheDayText p");

      if (titleElement) {
        titleElement.innerText = truncateText(data.common_name, 16); // Adjust maxLength as needed
      }

      if (descriptionElement) {
        descriptionElement.innerText = truncateText(data.description, 300); // Adjust maxLength as needed
      }
    }
  }, [data]);

  return (
    <>
      {data && (
        <div className="plantOfTheDayContainer">
          <div className="plantOfTheDay">
            <div className="plantOfTheDayText">
              <h1>Plant of the day</h1>
              <h2 title={data.common_name}>{data.common_name}</h2>
              <h3>{data.scientific_name}</h3>
              <p>{data.description}</p>
              <h4>See the users that have this plant</h4>
              <p className="users">
                @user1001 / @user1002 / @user1003 / @user1004 /{" "}
              </p>
            </div>
          </div>

          <div className="plantOfTheDayPic">
          <Link to={'/details'}><img
              src={data.default_image.regular_url}
              alt={data.scientific_name}
            /></Link>
          </div>
        </div>
      )}
    </>
  );
};

export default PlantOfTheDay;
