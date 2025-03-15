/* eslint-disable no-unused-vars */
import React from 'react'
import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'

const RoleBaseRoutes = ({children,requiredRole}) => {
    const {user,loading}=useAuth()
    if(loading){
        return <div>Loading...</div>
    }
    if(user){
        if(user.role===requiredRole){
            return children 
        }
        else{
            return <Navigate to="/login"/>
        }
    }
    return <Navigate to="/unauthorized"/>
}

export default RoleBaseRoutes

//prop validation 
import PropTypes from 'prop-types'
RoleBaseRoutes.propTypes={
    children:PropTypes.node.isRequired,
    requiredRole:PropTypes.string.isRequired
}
