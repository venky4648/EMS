/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaUser, FaBuilding, FaCalendarAlt, FaMoneyBill, FaCog } from "react-icons/fa";
// import "./dashboard/AminSidebar.css";
import "../dashboard/AdminSummary";
import { useAuth } from "../../context/authContext";
import "../dashboard/AminSidebar.css"; // Assuming you have a CSS file for styling

const EmployeeSidebar = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  // Safely handle user._id in path
  const profilePath = user?._id
    ? `/employee-dashboard/profile/${user._id}`
    : "/employee-dashboard/profile";

  const menuItems = [
    { name: "dashboard", icon: <FaTachometerAlt />, path: "/employee-dashboard",end:true },
    { name: "MY profile", icon: <FaUser />, path: profilePath },
    { name: "leave", icon: <FaCalendarAlt />, path: "/employee-dashboard/leave" },
    { name: "salary", icon: <FaMoneyBill />, path: "/employee-dashboard/salary/add" },
    { name: "settings", icon: <FaCog />, path: "/employee-dashboard/settings" },
  ];

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <h1 className="sidebar-title">Employee Management System</h1>
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </button>
      <ul>
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setIsOpen(false)} // closes sidebar when link clicked
            >
              <span className="icon">{item.icon}</span>
              {isOpen && <span className="menu-text">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeSidebar;
