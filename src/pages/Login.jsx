import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import '../styles/login.css'
import Home from './HomeFinal';
import users from '../tempData/users';
import { FaCheck, FaLock, FaSign, FaSignInAlt, FaTimes, FaUserAlt } from 'react-icons/fa';
import { FaSignHanging, FaUserLock } from 'react-icons/fa6';

export default function Login({loginPrams}){

  // const {}

    const nev = useNavigate();
    let {login,setisLoginVisible} = loginPrams;
    
    const [username, setusername] = useState("");
    const [pass, setpass] = useState('');
    const [isWrongPass, setisWrongPass] = useState(false);
    
    console.log(loginPrams);

    function removeLoginPage(){
      setisLoginVisible(false);
      nev('/');
    }
    
    function handleLogin(e){
      e.preventDefault();
      let [authenticated] = users.filter((obj)=>obj.upass== pass && obj.uname == username);
      if(authenticated){
        console.log(authenticated.role);
        login(authenticated.ubranchId);
        setisLoginVisible(false);
      }else{
        setisWrongPass(true);
      }
    }
  
    return (
        <div className="mask">
            <div className={` slide-down loginBox ${isWrongPass ? 'wrongPass' : ''}`}>
                <h1><FaSignInAlt/>Login</h1>
                <span className='cross' onClick={removeLoginPage}><FaTimes size='25px'/></span>
                <form action="" onSubmit={handleLogin} className='form-container'>
                    <div className='input-fields'>

                      <label htmlFor="username"><FaUserAlt/> Username</label>
                      <input type="text" name="username" id="username" placeholder='Username'
                       defaultValue={username} onChange={(e)=>setusername(e.target.value)} required/>

                    </div>

                    <div className='input-fields'>

                      <label htmlFor="pass"><FaLock/>Passward</label>
                      <input type="text" name="pass" placeholder='Password' id="pass" 
                      defaultValue={pass} onChange={(e)=>setpass(e.target.value)} required />

                    </div>

                    <div  className='login'>
                      <div className={`${isWrongPass ? 'show-warning' : 'hide-warning' }`}>
                        <p>wrong username or password !</p>
                      </div>
                      <button onClick={()=>setisWrongPass(false)} >Login</button>  
                    </div>
                </form>
            </div>

        </div>
    )
  }
