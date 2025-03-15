/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const List = () => {
    
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
                            // value={searchTerm}
                            // onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="btn">
                            <Link to="/admin-dashboard/add-employee" className="add-dept">
                                Add New Empoloyee
                            </Link>
                        </button>
                    </div>
                </>
           
)}

export default List