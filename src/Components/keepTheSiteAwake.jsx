// src/utils/pingService.js

export function startPing() {
    const interval = setInterval(() => {
        console.log("Sending ping to backend...");

        fetch("https://count-it-login.onrender.com/api/ping")
            .then(response => {
                if (response.ok) {
                    console.log("Ping successful:", response.status);
                } else {
                    console.error("Ping failed with status:", response.status);
                }
            })
            .catch(error => console.error("Ping failed:", error));
    }, 6000); // 10 minutes in milliseconds

    return () => clearInterval(interval);
}
