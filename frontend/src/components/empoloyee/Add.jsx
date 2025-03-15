/* eslint-disable no-unused-vars */
import React from "react";
import './Add.css'

const Add = () => {
  return (
    <div className="container">
      <h2>Add Employee</h2>
      <form>
        <div className="form-grid">
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="input-field" placeholder="Enter your Name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="input-field" placeholder="Enter your Email" />
          </div>

          <div className="form-group">
            <label>Employee ID</label>
            <input type="text" className="input-field" placeholder="Employee ID" />
          </div>
          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" className="input-field" />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select className="input-field">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="form-group">
            <label>Marital Status</label>
            <select className="input-field">
              <option>Select Status</option>
              <option>Single</option>
              <option>Married</option>
            </select>
          </div>

          <div className="form-group">
            <label>Department</label>
            <select className="input-field">
              <option>Select Department</option>
              
            </select>
          </div>
          <div className="form-group">
            <label>Designation</label>
            <input type="text" className="input-field" placeholder="Designation" />
          </div>

          <div className="form-group">
            <label>Salary</label>
            <input type="number" className="input-field" placeholder="Salary" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="input-field" placeholder="*******" />
          </div>

          <div className="form-group">
            <label>Role</label>
            <select className="input-field">
              <option>Select Role</option>
              <option>Admin</option>
              <option>Employee</option>
            </select>
          </div>
          <div className="form-group">
            <label>Upload Image</label>
            <input type="file" className="input-field" />
          </div>
        </div>

        <button type="submit" className="submit-btn">Add Employee</button>
      </form>
    </div>
  );
};

export default Add;
