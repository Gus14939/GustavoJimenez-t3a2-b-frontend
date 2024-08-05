import React from "react";
import { Link } from "react-router-dom";

const ProfileLogin = () => {
  const Planthora_API = "http://localhost:3333/profile/login";

  return (
    <div className="noHomeContainer">
      <div className="userForms">
        <h1>Login</h1>
        <form action="">
          <div className="field">
            <label>Username:</label>
            <input type="text" name="username" required />
          </div>
          <div className="field">
            <label>Password:</label>
            <input type="password" name="password" required />
          </div>

          <div className="formButton">
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="toggleSingupLogin">
          <h4>
            Are you new to Planthora?<br /> <Link to={"/profile/signup"}>Create an account</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProfileLogin;
