/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewEmployee = () => {
  const [employee, setEmployee] = useState(null); // Initialize as null
  const [empLoading, setEmpLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchEmployee = async () => {
      setEmpLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:3000/api/employee/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.data.success) {
          console.log(response.data.employee);
          setEmployee(response.data.employee);
        }
      } catch (error) {
        console.error("Error fetching employee:", error);
      } finally {
        setEmpLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  if (empLoading) return <p>Loading...</p>;

  // If employee is not loaded yet, return null to prevent errors
  if (!employee) return <p>No employee data available.</p>;

  return (
    <div>
      <h1>Employee Details</h1>

      {employee.userId && (
        <div>
          <img
            src={`http://localhost:3000/${employee.userId.profileImage}`}
            alt="Employee Profile"
            style={{ width: "150px", height: "150px", borderRadius: "50%" }}
          />
          <p><strong>Name:</strong> {employee.userId.name}</p>
          <p><strong>Email:</strong> {employee.userId.email}</p>
        </div>
      )}

      <div>
        <p><strong>Employee ID:</strong> {employee.employeeId}</p>
        <p><strong>Department:</strong> {employee.department?.dep_name}</p>
        <p><strong>Designation:</strong> {employee.designation}</p>
        <p><strong>Salary:</strong> ${employee.salary}</p>
      </div>
    </div>
  );
};

export default ViewEmployee;
