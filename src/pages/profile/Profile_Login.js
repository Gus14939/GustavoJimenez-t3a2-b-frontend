import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const ProfileLogin = () => {
  const Planthora_Login = "http://localhost:3333/profile/login";

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const submitLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(Planthora_Login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      // Assuming your backend returns a JSON object with a token upon successful login
      const data = await response.json();
      console.log("Login successful:", data);

      // Optionally, you can redirect the user to another page upon successful login
      // Example: navigate('/dashboard');
      navigate('/');

    } catch (error) {
      console.error("Login failed:", error);
      setErrors({ ...errors, login: "Failed to log in. Please check your credentials." });
    }
  };

  return (
    <div className="noHomeContainer">
      <div className="userForms">
        <h1>Login</h1>
        <form onSubmit={submitLogin}>
          <div className="field">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>
          <div className="field">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          {errors.login && <span className="error-message">{errors.login}</span>}

          <div className="formButton">
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="toggleSingupLogin">
          <h4>
            Are you new to Planthora? <br /> <Link to={"/profile/signup"}>Create an account</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProfileLogin;
