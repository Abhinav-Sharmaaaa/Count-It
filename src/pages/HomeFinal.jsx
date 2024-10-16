import React,{useState} from 'react'
import Header from './Header'
import Login from './Login'
import '../styles/home.css'
import logo from '../media/appLogo.jpg'


export default function Home({isVisible ,homePrams,loginPrams,headerPrams}) {
  const [isLoginVisible, setisLoginVisible] = useState(isVisible);
  
  // let {logo} = homePrams;
  
  loginPrams.setisLoginVisible = setisLoginVisible;

  headerPrams.isLoginVisible= isLoginVisible;
  headerPrams.setisLoginVisible = setisLoginVisible;

  console.log(headerPrams);

  console.log(isLoginVisible);
  return (
    <div>
      <Header headerPrams={headerPrams}/>
      {isLoginVisible &&  <Login loginPrams = {loginPrams}/>}

      <div className="hero"> 
        <div className="overlay"></div>
        <div className="detail-container">
          <div className="logo">
            <img src={logo} alt="logo" />
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
