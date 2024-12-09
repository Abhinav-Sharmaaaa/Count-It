import React from 'react'
import { useUserContext } from '../Context/LoginContext';
import '../Styles/userProfile.css'
import { FaUser } from 'react-icons/fa';
import DataInsertionForm from './DataInsertionForm';
import { useState } from 'react';

export default function User() {

  const {imgs} = useUserContext();
  const [dob, setdob] = useState("12-12-2004")

  const [notifications, setnotifications] = useState([
    "feiu kdfjkhg  lhfh euiot jjsdfkjh g iuio  jjgh ",
    "vbnskdjhbty feiu kdfjkhg  lhfh euiot  g iuio  jjgh ",
    "ngoasruty feiu kd euiot jjsdfkjh g iuio  jjgh ",
    "pqmssk feiu kdfjkhg  lhfh euiot jjsdfkjh g iuio  jjgh ",
    "mzwral feiu kdfjkhg  lhfh euiot jjsfgoierg  iuio  jjgh ",
    "dgroighfeiu kdfjkhg vnsneoigujjsdfkjh g iuio  jjgh ",
    "eruty feiu kdfjkhgtu vkr joiguo  jjgh ",
    "ty feiu kdfjkhg  lhfh euiot jgoeirugon jjgh ",
    "pqetrvuty feiu kdfjkhg  lwpro cbsyer ari kjh g iuio  jjgh ",
    "ngoasruty feiu kd euiot jjsdfkjh g iuio  jjgh ",
    "pqmssk feiu kdfjkhg  lhfh euiot jjsdfkjh g iuio  jjgh ",
    "mzwral feiu kdfjkhg  lhfh euiot jjsfgoierg  iuio  jjgh ",
    "dgroighfeiu kdfjkhg vnsneoigujjsdfkjh g",
  ])

  // const fields = [
  //   { label: 'Name', name: 'name', type: 'text', required: true },
  //   { label: 'Date-Of-Birth', name: 'dob', type: 'date', required: true },
  //   { label: 'Email', name: 'email', type: 'email', required: true },
  //   { label: 'Date', name: 'date', type: 'date', required: true },
  //   { label: 'Status', name: 'status', type: 'select', options: [{ label: 'Available', value: 'Available' }, { label: 'Out-of-Stock', value: 'Out of Stock' }], required: true },
  // ];

  // const [formData, setFormData] = useState({
  //   productName: '',
  //   price: '',
  //   quantity: '',
  //   date: '',
  //   status: '',
  // });
   
  return (
    <div className='component'>

      <div className="topSection ">

        <div className="top">
          <img src={imgs.profilePic} alt="pic" />

          <div className="userProfile">
            <h3>Aneesh Panwar</h3>
            <h4>Principal</h4>
          </div>
        </div>

        <div className="userdata">
          <form action="#">

            <label htmlFor="name"> Name -
              <input type="text" id='dob'  value='aneesh panwar' disabled required/>
            </label>

            <label htmlFor="dob"> DOB -
              <input type="date" name='date' id='dob'  defaultValue='12-12-2004' disabled/>
            </label>

            <label htmlFor="email"> Email -
              <input type="email" id='email'  value='aneesh@gmail.com' disabled required/>
            </label>

            <label htmlFor="phone"> Phone -
              <input type="text" id='phone'  value='3465857693' disabled required/>
            </label>

          </form>
        </div>
      </div>
      
        <div className="middleSection">
          <div className="notifications-heading">
            Notifications
          </div>
          <div className="actions-to-perform btn edit-btn" onClick={()=>setnotifications([])}> <img src={imgs.clearIcon} alt="" /> Clear</div>
        </div>
        
        <div className="notifications">
          <ul>
            {notifications.map((notification)=>{
              return <li>{notification}</li>
            })}
          </ul>
        </div>
    </div>
  )
}
