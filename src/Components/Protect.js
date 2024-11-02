import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUserContext } from '../Context/LoginContext';

const Protect = ({ Component }) => {
    const { isLogedin } = useUserContext();

    if (!isLogedin) {
        // If not logged in, redirect to the login page
        return <Navigate to="/login" replace />;
    }

    // If logged in, render the protected component
    return <Component />;
};

export default Protect;
