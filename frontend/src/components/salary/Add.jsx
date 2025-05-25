// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { fetchDepartment, getEmployees } from '../../utils/EmployeeHelper';

const Add = () => {
  const [salary, setSalary] = useState({
    employeeId: '',
    basicSalary: 0,
    allowances: 0,
    deductions: 0,
    payDate: '',
  });

  const [employees, setEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [empLoading, setEmpLoading] = useState(false);
  const navigate = useNavigate();
  
  // Fetch departments on mount
  useEffect(() => {
    const getDepartments = async () => {
      const departmnets = await fetchDepartment();
      setDepartments(departmnets || []);
    };
    getDepartments();
  }, []);

  const handleDepartment = async (e) => {
    const emps = await getEmployees(e.target.value);
    setEmployees(emps || []);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSalary((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/api/salary/add`, salary, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.data.success) {
        alert('Salary details added successfully');
        navigate('/admin-dashboard/employee');
      }
    } catch (error) {
      console.error("Error adding salary:", error);
      alert('Failed to add salary details');
    }
  };

  return (
    <>
      {empLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="container">
          <h2>Add Salary</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Department</label>
              <select
                name="department"
                onChange={handleDepartment}
                className="input-field"
                required
              >
                <option value="">Select Department</option>
                {departments.map((dep) => (
                  <option key={dep._id} value={dep._id}>
                    {dep.dep_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Employee</label>
              <select
                name="employeeId"
                onChange={handleChange}
                className="input-field"
                required
              >
                <option value="">Select Employee</option>
                {employees.map((emp) => (
                  <option key={emp._id} value={emp._id}>
                    {emp.employeeId}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Basic Salary</label>
              <input
                type="number"
                name="basicSalary"
                onChange={handleChange}
                className="input-field"
                placeholder="Basic Salary"
                required
              />
            </div>

            <div className="form-group">
              <label>Allowances</label>
              <input
                type="number"
                name="allowances"
                onChange={handleChange}
                className="input-field"
                placeholder="Allowances"
                required
              />
            </div>

            <div className="form-group">
              <label>Deductions</label>
              <input
                type="number"
                name="deductions"
                onChange={handleChange}
                className="input-field"
                placeholder="Deductions"
                required
              />
            </div>

            <div className="form-group">
              <label>Pay Date</label>
              <input
                type="date"
                name="payDate"
                value={salary.payDate}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>

            <button type="submit" className="submit-btn">Add Salary</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Add;
