import React, { useEffect, useState } from 'react';
import '../Styles/User.css';  // Assuming you have the necessary styles in User.css

export default function User() {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch the username from local storage
    const username = localStorage.getItem("username");

    useEffect(() => {
        if (!username) {
            console.error("No username found in local storage.");
            setError("No username provided.");
            setLoading(false);
            return;
        }

        console.log("Fetching user data for username:", username);

        fetch(`https://count-it-backend-2.onrender.com/api/user/${username}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch user data.");
                }
                return response.json();
            })
            .then((data) => {
                setUserData(data);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [username]);

    if (loading) {
        return <div className="user-profile-container">Loading...</div>;
    }

    if (error) {
        return <div className="user-profile-container error">Error: {error}</div>;
    }

    if (!userData) {
        return <div className="user-profile-container">No user data available.</div>;
    }

    return (
        <div className="user-profile-container">
            <div className="user-profile-card">
                <div className="profile-header">
                    <div className="avatar">
                        <img
                            src={userData.profilePic || "https://via.placeholder.com/100"} // Replace with a real profile picture or fallback
                            alt="Profile"
                        />
                    </div>
                    <h2 className="profile-name">{userData.username}</h2>
                    <p className="profile-role">{userData.role}</p>
                </div>

                <div className="profile-details">
                    {Object.entries(userData)
                        .filter(([key]) => key !== 'id' && key !== 'username' && key !== 'role') // Exclude 'id', 'username', and 'role' from the details
                        .map(([key, value]) => (
                            <div className="profile-row" key={key}>
                                <span className="profile-label">
                                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                                </span>
                                <span className="profile-value">{value}</span>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
