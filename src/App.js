import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import About from './pages/about';
import Home from './pages/HomeFinal'
import Protect from './pages/ProtectRout'
import User from './pages/user'
import uData from './tempData/usersData'
import imgs from './tempData/imeges'
import { UserContext } from './Context/LoginContext'
import Inventory from './pages/Inventory'


function App() {

  const [isLogedin, setisLogedin] = useState(false);
  const [branch, setbranch] = useState(-1);
  const [userData, setuserData] = useState('');

  function login(branchId){
    let [userData] = uData.filter((users)=> users.branchId == branchId);
    setuserData(userData);
    setisLogedin(true);
    setbranch(branchId);
  }

  let homePrams = {
    logo:imgs.logo,
  };

  let headerPrams = {
    isLogedin,
    setisLogedin,
  }

  let protectPrams = {
    isLogedin,
  }

  let componentPrams = {
    userData,
  };

  let loginPrams = {
    login,
  };


  return (
    <UserContext.Provider value={{isLogedin,setisLogedin,branch,setbranch,}}>
      {/* <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
      </Routes> */}

<Routes>
          <Route path='/' element = {<Home homePrams={homePrams} loginPrams={loginPrams} headerPrams={headerPrams}/>} />

          <Route path='/user' element = 
            {<Protect
              protectPrams={protectPrams} 
              homePrams={homePrams} 
              loginPrams={loginPrams}
                headerPrams={headerPrams} 
                Component={User} 
                componentPrams={componentPrams} 
              />} 
          />

          <Route path='/inventory' element={<Protect
              protectPrams={protectPrams} 
              homePrams={homePrams} 
              loginPrams={loginPrams}
                headerPrams={headerPrams} 
                Component={Inventory} 
                componentPrams={componentPrams} 
              />} />

              <Route path='/about' element={<About loginPrams={loginPrams} headerPrams={headerPrams}/>}/>

          {/* <Route path='/admin' element = {<Protect isLogedin = {isLogedin} setisLogedin={setisLogedin} Component = {Admin} branchId = {branch}/>} /> */}

          <Route path='*' element = {<div>not found....! i think its a wrong path or you havent define any path ....</div>} />
       </Routes>

      </UserContext.Provider>
  );
}

export default App;
