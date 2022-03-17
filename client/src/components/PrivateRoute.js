import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { userInfo } = useSelector((state) => state.userLogin);

  return userInfo ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
