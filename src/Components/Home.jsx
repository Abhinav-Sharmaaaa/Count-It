import React from 'react'
import Login from './Login'
import '../Styles/home.css'
import { useUserContext } from '../Context/LoginContext';

export default function Home({showLogin}) {
  
let {imgs,isLoginVisible}= useUserContext();
  
  console.log(isLoginVisible);
  return (
    <div>
      {(isLoginVisible || showLogin) &&  <Login/>}

      <div className="hero"> 
        <div className="overlay"></div>
        <div className="detail-container">
          <div className="logo">
            <img src={imgs.logo} alt="logo" />
          </div>
          <div className="appDescription">
            <h1>Inventory Management System</h1>
            <h3> <span></span>Accurate Efficient Reliable </h3>
            <p>Count-It is transforming the way college manages its assets, making inventory tracking faster, more accurate, and more reliable. Say goodbye to manual entries and hello to a smarter, automated system</p>
          </div>
        </div>
      </div>

      
    </div>
  )
}
