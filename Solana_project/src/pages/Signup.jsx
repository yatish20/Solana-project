import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = () => {
        if (password.trim()) {
            localStorage.setItem("walletPassword", password); // Store password securely
            localStorage.setItem("authToken", "sample_token"); // Simulate authentication
            navigate("/dashboard"); // Redirect to dashboard after signup
        } else {
            alert("Please set a password.");
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up / Set Password</h2>
            <input
                type="password"
                placeholder="Set Wallet Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignup}>Set Password & Login</button>
        </div>
    );
};

export default Home;
