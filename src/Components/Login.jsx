import React,{useState} from 'react'
import {useNavigate } from 'react-router-dom';
import '../Styles/login.css'
import users from '../TempoaryData/users';
import {FaLock, FaSignInAlt, FaTimes, FaUserAlt } from 'react-icons/fa';
import { useUserContext } from '../Context/LoginContext';

export default function Login(){

    let {login,setisLoginVisible} = useUserContext();
    const nav = useNavigate();
    
    const [username, setusername] = useState("aneesh");
    const [pass, setpass] = useState('1234');
    const [isWrongPass, setisWrongPass] = useState(false);
    

    function removeLoginPage(){
      setisLoginVisible(false);
      nav('/');
    }
    

    function handleLogin(e){
      e.preventDefault();
      let [authenticated] = users.filter((obj)=>obj.upass== '1234' && obj.uname == 'aneesh');
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
