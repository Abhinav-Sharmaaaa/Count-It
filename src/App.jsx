import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import Protect from './Components/Protect';
import User from './Components/User';
import uData from './TempoaryData/usersData';
import imgs from './TempoaryData/Images';
import { UserContext } from './Context/LoginContext';
import Inventory from './Components/Inventory';
import About from './Components/About';
import LayoutDrawer from './Layouts/LayoutDrawer';
import LayoutNoDrawer from './Layouts/LayoutNoDrawer';
import Allotment from './Components/Allotment';
import Returned from './Components/Returned';

function App() {
    const [isLoginVisible, setisLoginVisible] = useState(false);
    const [isLogedin, setisLogedin] = useState(false);
    const [branch, setbranch] = useState(-1);
    const [userData, setuserData] = useState('');
    const [role, setRole] = useState(''); // State for storing user role

    const location = useLocation();
    const drawerNeedingComponents = ['/inventory', '/user-profile', '/allotment', '/returned'];
    const needDrawer = drawerNeedingComponents.includes(location.pathname);

    // Check for stored role and token in localStorage
    useEffect(() => {
        const storedRole = localStorage.getItem('role');
        const storedToken = localStorage.getItem('token');
        if (storedRole && storedToken) {
            setRole(storedRole); // Set role from localStorage
            setisLogedin(true);  // Set user as logged in
        }
    }, []);

    function login(role, branchId = 1) {
        let [userData] = uData.filter((users) => users.branchId === branchId);
        setuserData(userData);
        setisLogedin(true);
        setRole(role); // Set role from login
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
        component: location.pathname,
        role,  // Make role available in context
    };

    return (
        <UserContext.Provider value={values}>
            {
                needDrawer ? (
                    <LayoutDrawer>
                        <Routes>
                            <Route path='/user-profile' element={<Protect Component={User} />} />
                            <Route path='/inventory' element={<Protect Component={Inventory} />} />
                            <Route path='/allotment' element={<Protect Component={Allotment} />} />
                            <Route path='/returned' element={<Protect Component={Returned} />} />
                        </Routes>
                    </LayoutDrawer>
                ) : (
                    <LayoutNoDrawer>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/login' element={<Home showLogin={true} />} />
                            <Route path='*' element={<div>Not found....! I think it's a wrong path or you haven't defined any path ....</div>} />
                        </Routes>
                    </LayoutNoDrawer>
                )
            }
        </UserContext.Provider>
    )
}

export default App;
