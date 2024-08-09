import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const ProfileSignup = () => {
  const PlanthoraBkEnd = process.env.REACT_APP_BKND_ROOT
  const PlanthoraURL = `${PlanthoraBkEnd}/profile/signup`;

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    address:{
      suburb: "",
      postcode: "",
    },
    favouritePlant: ""
  });

  const navigate = useNavigate();

const handleInputChange = (e) => {
  const { name, value } = e.target;

  if (name === "suburb" || name === "postcode") {
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [name]: value,
      },
    }));
  } else {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(PlanthoraURL, {
      // console.log("Form Data:", formData); // Log formData for debugging

        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error("Signup failed");
      }
  
      const data = await response.json();
      console.log("Signup successful:", data); 

      navigate('/profile/login');
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="noHomeContainer">
      <div className="userForms">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className="field">
            <label>Last Name:</label>
            <input type="text" name="lastname" value={formData.lastname} onChange={handleInputChange} required />
          </div>
          <div className="field">
            <label>Username:</label>
            <input type="text" name="username" value={formData.username} onChange={handleInputChange} required />
          </div>
          <div className="field">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="field">
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
          </div>
          <div className="field">
            <label>Suburb:</label>
            <input type="text" name="suburb" value={formData.suburb} onChange={handleInputChange} required />
          </div>
          <div className="field">
            <label>Postcode:</label>
            <input type="number" name="postcode" value={formData.postcode} onChange={handleInputChange} required />
          </div>
          <div className="field">
            <label>Favourite plant:</label>
            <input type="text" name="favouritePlant" value={formData.favouritePlant} onChange={handleInputChange} />
          </div>
          
          <div className="formButton">
            <button type="submit">Signup</button>
          </div>
        </form>
        <div className="toggleSingupLogin">
          <h4>
            Already have an account? <Link to={"/profile/login"}>Login</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProfileSignup;
