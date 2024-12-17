import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth } from "../hooks/useAuth";
import "../style/Login.css";

const Login: React.FC = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login attempt:", formData);

    const baseUrl = process.env.REACT_APP_BASE_URL;
    fetch(`${baseUrl}/authenticate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(async (data) => {
        if (data.token) {
          await login(data.token);
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit">Login</button>
        </form>
        <button><RouterLink to="/register">Register</RouterLink></button>
      </div>
    </>
  );
};

export default Login;
