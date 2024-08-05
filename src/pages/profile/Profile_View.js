import React, { useEffect, useState } from "react";
import SearchComponent from "../../components/SearchComponent";
import MyPostsComponent from "../../components/MyPostsComponent";

const Planthora_API = "http://localhost:3333/profile/all";
// const Planthora_API = "https://gustavojimenez-t3a2-b-backend.onrender.com/profiles/all";

const ProfileView = () => {
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

      {data.length > 0 ? (
        data.slice(0,2).map((profile) => (
          <div key={profile._id}>
            <h3 title={profile.name}>{profile.lastname}</h3>
            <p>Username: {profile.username}</p>
            <p>Email: {profile.email}</p>
            <p>Favorite Plant: {profile.favouritePlant}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </div>
  );
};

export default ProfileView;
