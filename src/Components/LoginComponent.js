import React from 'react';
import { useUserContext } from '../Context/LoginContext';

const LoginComponent = () => {
    const { setUser } = useUserContext();

    const handleLogin = () => {
        // Simulate a login and set user data
        setUser({ username: "exampleUser", role: "admin" });
    };

    return <button onClick={handleLogin}>Login</button>;
};

export default LoginComponent;
