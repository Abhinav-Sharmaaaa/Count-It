import React, { Children } from 'react'
import Drawer from '../Components/Drawer'
import { Outlet } from 'react-router-dom'


export default function LayoutDrawer({children}) {

  return (
    <div className='app-layout'>
        <div className="body-layout">
            <Drawer/>
            <div className="main-content  with-drawer">
              {children}
            </div>
        </div>
    </div>
  )
}
