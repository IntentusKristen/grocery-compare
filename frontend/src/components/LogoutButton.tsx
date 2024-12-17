import React from "react";
import "../style/Navbar.css"; // Use the same CSS file for consistency
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const LogoutButton: React.FC = () => {
  const { token, logout } = useAuth();

  const handleClick = async () => {
    try {
      if (token) {
        await logout(token);
        return <Navigate to="/login" />;
      } else {
        throw new Error("No token found.");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <button className="logout-button" onClick={handleClick}>
      Logout
    </button>
  );
};

export default LogoutButton;
