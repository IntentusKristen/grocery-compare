import React from "react";
import "../style/Navbar.css"; // Use the same CSS file for consistency

const LogoutButton: React.FC = () => {
  return (
    <button className="logout-button">
      Logout
    </button>
  );
};

export default LogoutButton;
