/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import PropTypes from "prop-types"; // Fix incorrect import
import { useNavigate } from "react-router-dom";

export const fetchDepartment = async () => {
  let departments;
  try {
    const response = await axios.get("http://localhost:3000/api/department/all", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.data.success) {
      departments = response.data.departments;
    }
  } catch (error) {
    console.error("Error fetching departments:", error);
    if (error.response?.data?.message) {
      alert(error.response.data.message);
    }
  }
  return departments;
};



export const EmployeeButtons = ({ _id }) => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <button className="btn" onClick={() => navigate(`/employee/${_id}`)}>View</button>
      <button className="btn" style={{ backgroundColor: "blue" }} onClick={() => navigate(`/edit-employee/${_id}`)}>Edit</button>
      <button className="btn" style={{ backgroundColor: "green" }} onClick={() => navigate(`/salary/${_id}`)}>Salary</button>
      <button className="btn" style={{ backgroundColor: "orange" }} onClick={() => navigate(`/leave/${_id}`)}>Leave</button>
    </div>
  );
};


// Prop validation
EmployeeButtons.propTypes = {
  _id: PropTypes.string.isRequired,
};


const column = [
    {
      name: "s.no",
      selector: (row) => row.sno,
    },
    {
      name: "Name",
      selector: (row) => row.dept_name,
      sortable: true,
    },
    {
        name: "Image",
      selector: (row) => row.profileImage,
    },
    {
      name: "Department",
      selector: (row) => row.dept_name,
    },
    {
        name:"DOB",
        selector: (row) => row.dob,
        sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      
    },
    
  ];
  
  export default column;