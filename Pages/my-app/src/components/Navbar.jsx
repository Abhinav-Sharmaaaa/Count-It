import React from 'react';
import './css_files/Navbar.css';  // Import the CSS file
import MySvgComponent from './logos/profile_logo';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li className="logo">
                    <h1>COUNT-IT</h1>
                </li>
                <li className='right_place'><a href='/'>Home</a></li>
                <li className='right_place'><a href='/yourInventory'>Your Inventory</a></li>
                <li className='right_place'><a href='/store'>Store</a></li>
                <li className='right_place'><a href='/about'>About us</a></li>
                <li><MySvgComponent/></li>
            </ul>
        </nav>
    )
};

export default Navbar;
