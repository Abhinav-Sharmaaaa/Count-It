import React, { useEffect } from 'react';
import axios from 'axios';

const KeepTheSiteAwake = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Sending ping to backend...");

            axios.get("https://count-it-login.onrender.com/ping")
                .then(response => {
                    console.log("Ping successful:", response.data);
                })
                .catch(error => {
                    console.log("Ping failed:", error);
                });
        }, 840000); // Every 60 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return null; // Or any JSX if needed
};

export default KeepTheSiteAwake;
