import React from 'react'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'
import '../Styles/header.css'
import imgs from '../TempoaryData/Images';
import {FaSignInAlt, FaSignOutAlt, FaUserCircle} from 'react-icons/fa';
import { useUserContext } from '../Context/LoginContext';

export default function Header() {

  let {isLogedin,setisLogedin,setisLoginVisible} = useUserContext();

  let nav = useNavigate();

  function handleLogout(){
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
              <li><NavLink to='/' className={({isActive})=>`${isActive ? 'Active-tab':''}`}>home</NavLink></li>
              <li><NavLink to={'/inventory'} className={({isActive})=>`${isActive ? 'Active-tab':''}`}>inventory</NavLink> </li>
              <li><NavLink to={'/about'} className={({isActive})=>`${isActive ? 'Active-tab':''}`}>About</NavLink> </li>
            </div>

              <div className="profile-tab">
                <li><Link to={'/user-profile'}><FaUserCircle size='30px'/></Link> </li>
                <li className='login'>
                {isLogedin ? 
                <span onClick={handleLogout} className='cursor-pointer'><FaSignOutAlt size={"30px"}/></span> :
                <span onClick={()=>setisLoginVisible(true)} className='cursor-pointer'><FaSignInAlt  size='30px'/></span>  
              }
                </li>
              </div>
          </ul>

      </div>
    </div>
  )
}
