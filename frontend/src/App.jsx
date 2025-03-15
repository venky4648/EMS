/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/login";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard.jsx";
import EmployeeDashboard from "./pages/EmployeeDashboard.jsx/EmployeeDahboard";
import RoleBaseRoutes from "./utils/RoleBaseRoutes.jsx";
import PrivateRoutes from "./utils/ProtectRoutes.jsx";
import AdminSummary from "./components/dashboard/AdminSummary.jsx";
import DepartmentList from "./components/department/DepartmentList.jsx";
import AddDepartment from "./components/department/AddDepartment.jsx";
import EditDepartment from "./components/department/EditDepartment.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoutes>
              <RoleBaseRoutes requiredRole="admin">
                <AdminDashboard />
              </RoleBaseRoutes>
            </PrivateRoutes>
          }
        >
          <Route index element={<AdminSummary />} />
          <Route exact path="/admin-dashboard/dashboard" element={<AdminSummary />} />
          <Route exact path="/admin-dashboard/department" element={<DepartmentList />} />
          <Route exact path="/admin-dashboard/department/add-department" element={<AddDepartment />} />
          <Route exact path="/admin-dashboard/department/:id" element={<EditDepartment />} />
          <Route exact path="/admin-dashboard/employee" element={<AdminDashboard />} />
          <Route exact path="/admin-dashboard/leave" element={<AdminDashboard />} />
          <Route exact path="/admin-dashboard/salary" element={<AdminDashboard />} />
          <Route exact path="/admin-dashboard/settings" element={<AdminDashboard />} />
        </Route>

        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
