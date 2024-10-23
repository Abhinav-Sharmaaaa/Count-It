import React, { useState } from 'react'
import './App.css'
import {Routes,Route, useLocation} from 'react-router-dom'
import Home from './Components/Home'
import Protect from './Components/ProtectRout'
import User from './Components/User'
import uData from './TempoaryData/usersData'
import imgs from './TempoaryData/Images'
import { UserContext } from './Context/LoginContext'
import Inventory from './Components/Inventory'
import About from './Components/About'
import LayoutDrawer from './Layouts/LayoutDrawer'
import LayoutNoDrawer from './Layouts/LayoutNoDrawer'
import Allotment from './Components/Allotment'
import Returned from './Components/Returned'


function App() {

  const [isLoginVisible, setisLoginVisible] = useState(false);
  const [isLogedin, setisLogedin] = useState(false);
  const [branch, setbranch] = useState(-1);
  const [userData, setuserData] = useState('');

  const location = useLocation();
  const drawerNeedingComponets = ['/inventory','/user-profile','/allotment','/returned'];
  const needDrawer = drawerNeedingComponets.includes(location.pathname);
  console.log(location);

  function login(branchId=1){
    let [userData] = uData.filter((users)=> users.branchId == branchId);
    setuserData(userData);
    setisLogedin(true);
    setbranch(branchId);
  }

  let values = {
    isLogedin,
    isLoginVisible,
    setisLoginVisible,
    setisLogedin,
    login,
    userData,
    imgs,
    needDrawer,
    component:location.pathname,
  }

  return (
    <>
    <UserContext.Provider value={values}>

      {
        needDrawer ?(
          <LayoutDrawer>

          <Routes>
              <Route path='/user-profile' element = {<Protect Component={User} />} />
              <Route path='/inventory' element={<Protect Component={Inventory} />} />
              <Route path='allotment' element={<Protect Component={Allotment} />} />
              <Route path='returned' element={<Protect Component={Returned} />} />
          </Routes>

          </LayoutDrawer>
        )
        :
        (
          <LayoutNoDrawer>

          <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='*' element = {<div>not found....! i think its a wrong path or you havent define any path ....</div>} />
          </Routes>

          </LayoutNoDrawer>
        )
      }

    </UserContext.Provider>
    </>
  )
}

export default App
