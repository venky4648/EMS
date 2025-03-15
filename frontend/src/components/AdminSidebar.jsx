/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaUser, FaBuilding, FaCalendarAlt, FaMoneyBill, FaCog } from "react-icons/fa";
// import "./dashboard/AminSidebar.css";
import "../components/dashboard/AdminSummary.css";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "dashboard", icon: <FaTachometerAlt />, path: "/admin-dashboard/dashboard" },
    { name: "employee", icon: <FaUser />, path: "/admin-dashboard/employee" },
    { name: "department", icon: <FaBuilding />, path: "/admin-dashboard/department" },
    { name: "leave", icon: <FaCalendarAlt />, path: "/admin-dashboard/leave" },
    { name: "salary", icon: <FaMoneyBill />, path: "/admin-dashboard/salary" },
    { name: "settings", icon: <FaCog />, path: "/admin-dashboard/settings" },
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

export default AdminSidebar;
