import React from 'react'
import Home from './HomeFinal'
import { Navigate } from 'react-router-dom';

export default function Protect({protectPrams,homePrams,loginPrams,headerPrams,Component,componentPrams}){
  // let componentPrams = {
  //   isLogedin,
  //   setisLogedin,
  //   role,
  // }

  // let homePrams = {
  //   login,
  //   isLogedin,
  //   setisLogedin,
  //   isLoginVisible:true,
  //   setisLoginVisible,
  // }

  let {isLogedin} = protectPrams;

  if(isLogedin){
    return(
      <Component componentPrams = {componentPrams} headerPrams={headerPrams} />
    )
  }
  return(
    <>
    <Home isVisible={!isLogedin} homePrams={homePrams} loginPrams ={loginPrams} headerPrams={headerPrams} />
    </>
  )

}
