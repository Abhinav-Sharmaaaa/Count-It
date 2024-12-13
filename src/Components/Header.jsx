import React from 'react';
import { json, Link, NavLink, useNavigate } from 'react-router-dom';
import '../Styles/header.css';
import imgs from '../TempoaryData/Images';
import { FaSignInAlt, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { useUserContext } from '../Context/LoginContext';

export default function Header() {
    let { isLogedin, setisLogedin} = useUserContext();

    let nav = useNavigate();

    let role = (localStorage.getItem("role"))

    function handleLogout() {
        setisLogedin(false);
        nav('/');
    }

    return (
        <div className='contain-box'>
            <div className='header'>
                <div className="header-logo">
                    <img src={imgs.logo} alt="img" />
                </div>
                <ul className='tabs'>
                    <div className='user-tab'>
                        <li><NavLink to='/' className={({ isActive }) => `${isActive ? 'Active-tab' : ''}`}>home</NavLink></li>
                        {/* {
                           role === 'manager' ? (<li><NavLink to={'/inventory'} className={({ isActive }) => `${isActive ? 'Active-tab' : ''}`}>inventory</NavLink></li>)
                           :
                          <li><NavLink to={'/csInventory'} className={({ isActive }) => `${isActive ? 'Active-tab' : ''}`}>CS-Inventory</NavLink></li>

                        } */}
                        <li><NavLink to={'/inventory'} className={({ isActive }) => `${isActive ? 'Active-tab' : ''}`}>inventory</NavLink></li>
                
                        <li><NavLink to={'/about'} className={({ isActive }) => `${isActive ? 'Active-tab' : ''}`}>About</NavLink></li>
                    </div>
                    <div className="profile-tab">
                        <li><Link to={'/user-profile'}><FaUserCircle size='30px' /></Link></li>
                        <li className='login'>
                            {isLogedin ? (
                                <span onClick={handleLogout} className='cursor-pointer'><FaSignOutAlt size={"30px"} /></span>
                            ) : (
                                <Link to='/login' className='cursor-pointer'><FaSignInAlt size='30px' /></Link>
                            )}
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    );
}
