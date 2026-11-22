import React, { useContext } from 'react';
import { AuthContextData } from '../context/AuthContext';
import { Navigate } from 'react-router';

const ProtectedRoute = ({ role, children }) => {

  const { user } = useContext(AuthContextData);

  console.log("Current User:", user);
  console.log("User Role:", user?.role);
  console.log("Required Role:", role);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (role && user.role?.toLowerCase() !== role.toLowerCase()) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;