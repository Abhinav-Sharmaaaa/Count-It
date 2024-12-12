import React, { createContext, useContext, useState } from 'react';

// Create the context
export const UserContext = createContext();

// Hook to use the context
export const useUserContext = () => useContext(UserContext);

// Provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // User data starts as null
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state
    const [imgs] = useState({
        profilePic: "/path/to/profile-pic.png", // Replace with actual path
        clearIcon: "/path/to/clear-icon.png", // Replace with actual path
    });

    const fetchUser = async (username) => {
        console.log(`Fetching user profile for ${username}`);  // Log when fetching starts
        setIsLoading(true); // Set loading to true when fetching
        setError(null); // Reset any previous errors
        try {
            const response = await fetch(`http://localhost:8080/api/user-profile/${username}`);
            if (!response.ok) {
                throw new Error("Failed to fetch user data.");
            }
            const data = await response.json();
            console.log('Received user data:', data);  // Log the fetched data
            setUser(data); // Set the user data
        } catch (err) {
            setError(err.message); // Set error message if fetching fails
            console.error("Error fetching user data:", err);  // Log the error in case of failure
        } finally {
            setIsLoading(false); // Set loading to false after fetching
        }
    };

    return (
        <UserContext.Provider value={{ user, imgs, fetchUser, isLoading, error }}>
            {children}
        </UserContext.Provider>
    );
};
