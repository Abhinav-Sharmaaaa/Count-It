import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import Protect from './Components/Protect';
import uData from './TempoaryData/usersData';
import imgs from './TempoaryData/Images';
import { UserContext } from './Context/LoginContext';
import Inventory from './Components/CollegeInventory';
import About from './Components/About';
import LayoutDrawer from './Layouts/LayoutDrawer';
import LayoutNoDrawer from './Layouts/LayoutNoDrawer';
import Allotment from './Components/CollegeAllotment';
import Returned from './Components/Returned';
import KeepTheSiteAwake from './Components/keepTheSiteAwake'; // Adjust path as necessary
import User from './Components/User';

function App() {
    const [isLoginVisible, setisLoginVisible] = useState(false);
    const [isLogedin, setisLogedin] = useState(false);
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

    function login(role) {
        setisLogedin(true);
        setRole(role); // Set role from login
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
            <KeepTheSiteAwake /> {/* Render the KeepTheSiteAwake component here */}
            {
                needDrawer ? (
                    <LayoutDrawer>
                        <Routes>
                            <Route path='/user-profile' element={<Protect Component={User} />} />
                            <Route path='/inventory' element={<Protect Component={Inventory} />} />
                            <Route path='/allotment' element={<Protect Component={Allotment} />} />
                            <Route path='/returned' element={<Protect Component={Returned} />} />
                            <Route path="/profile/:username" element={<User />} />
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
    );
}

export default App;
