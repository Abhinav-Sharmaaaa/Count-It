import React from 'react'
import Header from '../Components/Header'

export default function LayoutNoDrawer({children}) {
  return (
    <div className='app-layout'>
        <Header/>
        <div className='main-content'>
            {children}
        </div>
    </div>
  )
}

