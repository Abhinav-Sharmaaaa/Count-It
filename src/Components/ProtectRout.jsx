import React from 'react'
import Home from './Home'
import { useUserContext } from '../Context/LoginContext';

export default function Protect({Component}){

  let {isLogedin} = useUserContext();

  if(isLogedin){
    return(
      <Component/>
    )
  }
  return(
    <>
    <Home showLogin={true}/>
    </>
  )

}
