import React from 'react';
import './App.css';
import organizationImage from './organization.jpg'; // Make sure to place your image in the src folder
import logo from './logo.png'; // Make sure to place your logo image in the src folder

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="navbar-nav">
          <li className="nav-item"><a href="#about">About Us</a></li>
          <li className="nav-item"><a href="#goal">Our Goal</a></li>
          <li className="nav-item"><a href="#team">Our Team</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <header className="App-header">
        <div className="hero-section">
          <h1 className="fade-in">About Us</h1>
          <p className="about-text fade-in">
            Welcome to our organization! We are dedicated to making the world a better place through our innovative solutions and community-driven projects.
          </p>
        </div>
        <div className="content-section" id="goal">
          <h2 className="slide-in">Our Goal</h2>
          <p className="goal-text slide-in">
            Our goal is to empower individuals and communities by providing the tools and resources they need to succeed. We strive to create a positive impact and drive sustainable growth.
          </p>
          <div className="image-container">
            <img src={organizationImage} alt="Our Organization" className="organization-image" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
