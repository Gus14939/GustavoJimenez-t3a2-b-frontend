import React from "react";
import { Link } from "react-router-dom";

const ProfileSignup = () => {
  const Planthora_API = "http://localhost:3333/profile/signup";

  return (
    <div>
      <div className="userForms">
        <h1>Signup</h1>
        <form action="">
          <div className="field">
            <label>Name:</label>
            <input type="text" name="name" required />
          </div>
          <div className="field">
            <label>Last Name:</label>
            <input type="text" name="lastname" required />
          </div>
          <div className="field">
            <label>Username:</label>
            <input type="text" name="username" required />
          </div>
          <div className="field">
            <label>Email:</label>
            <input type="email" name="email" required />
          </div>
          <div className="field">
            <label>Password:</label>
            <input type="type" name="password" required />
          </div>
          <div className="field">
            <label>Suburb:</label>
            <input type="text" name="suburb" required />
          </div>
          <div className="field">
            <label>Postcode:</label>
            <input type="number" name="postcode" required />
          </div>
          <div className="field">
            <label>Favourite plant:</label>
            <input type="type" name="email" required />
          </div>
          <div className="signupButton">
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
