import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to Our Website!</h1>
      <p>This is the landing page.</p>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
};

export default LandingPage;
