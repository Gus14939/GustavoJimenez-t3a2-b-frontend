import React, { useEffect, useState } from "react";
import SearchComponent from "../../components/SearchComponent";
import MyPostsComponent from "../../components/MyPostsComponent";

const Planthora_API = "http://localhost:3333/profile/66af948772f9c3020306f1b1";
// const Planthora_API = "https://gustavojimenez-t3a2-b-backend.onrender.com/profiles/all";

const ProfileView = () => {
  // const PlanthoraBkEnd = process.env.REACT_APP_BKND_ROOT
  // const PlanthoraURL = `${PlanthoraBkEnd}/profile/66af948772f9c3020306f1b1`;

  const [data, setData] = useState([]);

  const getUsers = async () => {
    try {
      const result = await fetch(Planthora_API)
      .then((response) => response.json());
    //   const result = await response.json();
      setData(result.data); // Assuming the array is inside a "data" key
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log(data, "is data loading");

  return (
    <div className="noHomeContainer">
    <div className='ProfileContainer'>

      <h1>My Posts</h1>
      <div className="myPostslisting">
        <MyPostsComponent />
        <MyPostsComponent />
      </div>
      all my posts should be here

      <h1>Wishlist</h1>
      wishlist is here
      <div className='searchies'>
        <SearchComponent />
      </div>

      <h1>History</h1>
      history goes here

          <div key={data._id}>
            <h3 title={data.name}>{data.lastname}</h3>
            <p>Username: {data.username}</p>
            <p>Email: {data.email}</p>
            <p>Favorite Plant: {data.favouritePlant}</p>
          </div>

    </div>
    </div>
  );
};

export default ProfileView;
