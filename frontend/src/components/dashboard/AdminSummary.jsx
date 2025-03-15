/* eslint-disable no-unused-vars */
import React from 'react';
import SummaryCard from './SummaryCard';
import { FaBuilding, FaCheckCircle, FaFile, FaHourglass, FaMoneyBill, FaTimesCircle, FaUsers } from 'react-icons/fa';
import './AdminSummary.css';

const AdminSummary = () => {
  return (
    <div className="admin-summary">
      <h2>Dashboard Overview</h2>
      <div className="summary-grid">
        <SummaryCard icon={<FaUsers />} text="Total Members" number={13} iconClass="bg-blue" />
        <SummaryCard icon={<FaBuilding />} text="Total Departments" number={8} iconClass="bg-green" />
        <SummaryCard icon={<FaMoneyBill />} text="Monthly Pay" number={"$2500"} iconClass="bg-yellow" />
      </div>
      <div className='mt-12'>
        <h4 className='text'>Leave Deatils</h4>
        <div className='leave-summmary-grid'>
            <div className='row1'>
                <SummaryCard icon={<FaFile />} text="Total Leaves" number={13} iconClass="bg-blue" />
                <SummaryCard icon={<FaCheckCircle />} text="Approved Leaves" number={8} iconClass="bg-green" />
            </div>
            <div className='row2'>
                <SummaryCard icon={<FaHourglass/>} text="Pending Leaves" number={5} iconClass="bg-yellow" />
                <SummaryCard icon={<FaTimesCircle />} text="Denied Leaves" number={2} iconClass="bg-yellow" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSummary;
