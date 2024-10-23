import React from 'react'
import { useUserContext } from '../Context/LoginContext';

export default function User() {

  let{userData} = useUserContext();
  console.log(userData);

  function getLabInventory(lab){
    let labItems = [];
    for(let item in lab){
      console.log(item);
      labItems.push(item);
    }


    return (
      <ul>
        {labItems.map((item)=>{
          return (
            <p>{item} : {lab[item]}</p>
          )
        })}
      </ul>
    )
  }

  return (
    <div className='component'>
          users
    </div>
  )
}
