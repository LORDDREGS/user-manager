// src/components/PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom'; // Используем Navigate вместо Redirect

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component /> : <Navigate to="/login" />} // Используем Navigate
    />
  );
};

export default PrivateRoute;


