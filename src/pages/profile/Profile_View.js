import React, { useEffect, useState } from "react";

// const Planthora_API = "http://localhost:3333/profiles/all";
const Planthora_API = "https://gustavojimenez-t3a2-b-backend.onrender.com/profiles/all";

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
    <div>
      <h1>Hello</h1>
      {data.length > 0 ? (
        data.map((profile) => (
          <div key={profile._id}>
            <h1 title={profile.name}>{profile.lastname}</h1>
            <p>Username: {profile.username}</p>
            <p>Email: {profile.email}</p>
            <p>Favorite Plant: {profile.favouritePlant}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfileView;
