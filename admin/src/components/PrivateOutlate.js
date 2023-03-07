import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
const PrivateOutlate = ({ isLoggedIn }) => {
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateOutlate;