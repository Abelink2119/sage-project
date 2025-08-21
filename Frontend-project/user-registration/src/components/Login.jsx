// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`🔐 Logged in with\n📧 ${credentials.username}`);
    // Navigate to dashboard or homepage after login
    // navigate("/dashboard");
  };

  return (
    <form onSubmit={handleLogin} className="form-container">
      <h2>Login</h2>
      <input
        type="text"
        name="username"
        placeholder="Username or Email"
        value={credentials.username}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>

      <p className="switch-link">
        Don’t have an account?{" "}
        <span
          onClick={() => navigate("/register")}
          className="link-text"
          style={{ cursor: "pointer", color: "#007bff" }}
        >
          Create New Account
        </span>
      </p>
    </form>
  );
}

export default Login;
