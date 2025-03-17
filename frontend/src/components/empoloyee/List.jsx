/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import column, { EmployeeButtons } from "../../utils/EmployeeHelper"; // Correct import
import DataTable from "react-data-table-component";

const List = () => {
  const [employees, setEmployees] = useState([]);
  const [empLoading, setEmpLoading] = useState(true);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    setEmpLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/api/employee/all", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      
      if (response.data.success) {
        let sno = 1;
        const baseUrl = "http://localhost:3000"; // Ensure base URL is correct
        const data = response.data.employees.map((emp) => ({
          _id: emp._id,
          sno: sno++,
          dept_name: emp.department.dep_name,
          name: emp.userId.name,
          dob: new Date(emp.dob).toDateString(),
          profileImage: (
            <img
              src={`${baseUrl}/${emp.userId.profileImage}`} // Ensure full URL
              alt="Employee Profile"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }} // Optional: Styling for better display
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop
                e.target.src = "https://via.placeholder.com/50"; // Fallback image
              }}
            />
          ),
          action: <EmployeeButtons _id={emp._id} />, // Corrected JSX component
        }));

        setEmployees(data);
        console.log(data);
      }
    } catch (error) {
      console.error("Error fetching employees:", error);
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      }
    } finally {
      setEmpLoading(false);
    }
  };

  return (
    <>
      <div className="text-center">
        <h2 className="text-2xl font-bold">Manage Employee</h2>
      </div>
      <div className="search-add">
        <input
          type="search"
          placeholder="Search Department"
          className="search"
        />
        <button className="btn">
          <Link to="/admin-dashboard/add-employee" className="add-dept">
            Add New Employee
          </Link>
        </button>
      </div>
      <div>
        {empLoading? (
          <div>Loading...</div>
        ) : (
          <DataTable
            title="Employee List"
            columns={column}  data={employees}/>
        )}

      </div>
    </>
  );
};

export default List;
