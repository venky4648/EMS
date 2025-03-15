/* eslint-disable no-unused-vars */
import React from "react";
import { useAuth } from "../../context/authContext";
import "./AminSidebar.css"

const Navbar = () => {
  const { user } = useAuth();
  
  return (
    <div className="navbar">
      <p>Welcome, {user ? user.name : "Guest"}</p>
      <button className="logout-btn">Logout</button>
    </div>
  );
};

export default Navbar;



