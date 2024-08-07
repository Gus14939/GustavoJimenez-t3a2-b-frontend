import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const ProfileSignup = () => {
  const Planthora_signup = "http://localhost:3333/profile/signup";

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    suburb: "",
    postcode: "",
    favouritePlant: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log("Form Data:", formData); // Log formData for debugging
      
      const reMapForNesting = {
        name: formData.name,
        lastname: formData.lastname,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        address: {
          postcode: formData.postcode,
          suburb: formData.suburb,
        },
        favouritePlant: formData.favouritePlant
      }
  
      const response = await fetch(Planthora_signup, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(reMapForNesting)
      });
  
      // if (!response.ok) {
      //   throw new Error("Signup failed");
      // }
  
      const data = await response.json();
      console.log("Signup successful:", data); // Log successful response data
      // Optionally, you can redirect to another page upon successful signup
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
            <input type="text" name="favouritePlant" value={formData.favouritePlant} onChange={handleInputChange} required />
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
