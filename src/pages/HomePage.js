import React from "react";
import PlantOfTheDay from "../components/PlantOfTheDay";
import HomeHeroIntro from "../components/HomeHeroIntro";
import Listings from "../components/Listings";
import SearchComponent from "../components/SearchComponent";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home">
      <HomeHeroIntro />
      <PlantOfTheDay />
      <div className="homeInteractions">
        <Link className="postYourPlant_homeBtn" to="/posts/postYourPlant">
          <div>Post your plant</div>
        </Link>
        <div className="homePlantSearch">
          <SearchComponent />
        </div>
      </div>
      <div className="homeListings">
        <Listings />
      </div>
    </div>
  );
};

export default HomePage;
