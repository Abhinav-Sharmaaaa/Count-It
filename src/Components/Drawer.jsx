import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/drawer.css'
import { useUserContext } from '../Context/LoginContext'

export default function Drawer() {

  const {imgs} = useUserContext();

  return (
    <div className='drawer'>
      <NavLink to='/' className={({isActive})=>`${isActive ? 'active-drawer-tab':''} drawer-tab`}>
      <img src={imgs.homeIcon} alt='home'/>
       home</NavLink>

      <NavLink to='/inventory' className={({isActive})=>`${isActive ? 'active-drawer-tab':''} drawer-tab`}>
       <img src={imgs.inventoryIcon} alt="inventory" />
       Inventory</NavLink>

      <NavLink to={'/allotment'} className={({isActive})=>`${isActive ? 'active-drawer-tab':''} drawer-tab`}> 
      <img src={imgs.allotmentIcon} alt="allotment" /> 
      Allotment</NavLink>

      <NavLink to='/returned' className={({isActive})=>`${isActive ? 'active-drawer-tab':''} drawer-tab`}> 
      <img src={imgs.returnedIcon} alt="returned" />
       Returned</NavLink>

      <NavLink to='/user-profile' className={({isActive})=>`${isActive ? 'active-drawer-tab':''} drawer-tab`}>
       <img src={imgs.profileIcon} alt="profile" />
       Profile</NavLink>

    </div>
  )
}
