import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import '../styles/login.css';
import { FaCheck, FaLock, FaSign, FaSignInAlt, FaTimes, FaUserAlt } from 'react-icons/fa';
import { FaSignHanging, FaUserLock } from 'react-icons/fa6';

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        username,
        password,
      });

      if (response.data.token) {
        // Store the token in local storage or a secure cookie
        localStorage.setItem('token', response.data.token);
        navigate('/home'); // Redirect to the home page after successful login
      } else {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('Login failed. Please try again.');
    }
  };

  return (
    <div className="mask">
      <div className="slide-down loginBox">
        <h1><FaSignInAlt />Login</h1>
        <span className='cross' onClick={() => navigate('/')}><FaTimes size='25px' /></span>
        <form onSubmit={handleSubmit} className='form-container'>
          <div className='input-fields'>
            <label htmlFor="username"><FaUserAlt /> Username</label>
            <input type="text" name="username" id="username" placeholder='Username'
              value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className='input-fields'>
            <label htmlFor="password"><FaLock /> Password</label>
            <input type="password" name="password" id="password" placeholder='Password'
              value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className='login'>
            {errorMessage && <p>{errorMessage}</p>}
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}