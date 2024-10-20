import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/header.css'
import imgs from '../tempData/imeges';
import { FaKey, FaSignInAlt, FaSignOutAlt, FaUserCircle, FaUserLock } from 'react-icons/fa';
import logo from'../media/logo.jpg'
export default function Header({headerPrams}) {

  let {isLogedin,setisLogedin,isLoginVisible,setisLoginVisible} = headerPrams;
  let nav = useNavigate();

  function handleLogout(){
    setisLogedin(false);
    nav('/');
  }


  return (
    <div className='contain-box'>
      <div className='header'>

          <div className="header-logo">
            <img src={logo} alt="img" />
          </div>

          <ul className='tabs'>
            <div className='user-tab'>
              <li><Link to={'/'}>home</Link> </li>
              <li><Link to={'/inventory'}>inventory</Link> </li>
              <li><Link to={'/about'}>About</Link> </li>
            </div>

              <div className="profile-tab">
                <li><Link to={'/user'}><FaUserCircle size='30px'/></Link> </li>
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
