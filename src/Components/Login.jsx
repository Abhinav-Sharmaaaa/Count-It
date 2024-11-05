import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/login.css';
import { FaLock, FaSignInAlt, FaTimes, FaUserAlt } from 'react-icons/fa';
import { useUserContext } from '../Context/LoginContext';
import axios from 'axios';

export default function Login() {
    let { login, setisLoginVisible } = useUserContext();
    const nav = useNavigate();
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState('');
    const [isWrongPass, setIsWrongPass] = useState(false);

    function removeLoginPage() {
        setisLoginVisible(false);
        nav('/');
    }

    async function handleLogin(e) {
        e.preventDefault();
        console.log("Logging in with:", { username, password }); // Log the credentials
        
        try {
            const response = await axios.post('https://count-it-login.onrender.com/login', {
                username,
                password,
            });

            if (response.status === 200) {
                const { message, role } = response.data; // Destructure message and role
                localStorage.setItem('role', role); // Store the role
                login(role);        
                setisLoginVisible(false);
                nav('/');           
            }
        } catch (error) {
            console.error("Login failed:", error);
            setIsWrongPass(true);
        }
    }

    return (
        <div className="mask">
            <div className={`slide-down loginBox ${isWrongPass ? 'wrongPass' : ''}`}>
                <h1><FaSignInAlt /> Login</h1>
                <span className='cross' onClick={removeLoginPage}><FaTimes size='25px' /></span>
                <form onSubmit={handleLogin} className='form-container'>
                    <div className='input-fields'>
                        <label htmlFor="username"><FaUserAlt /> Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder='Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className='input-fields'>
                        <label htmlFor="pass"><FaLock /> Password</label>
                        <input
                            type="password"
                            name="pass"
                            placeholder='Password'
                            id="pass"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className='login'>
                        <div className={`${isWrongPass ? 'show-warning' : 'hide-warning'}`}>
                            <p>Wrong username or password!</p>
                        </div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
