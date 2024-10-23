import React from 'react'
import DataTable from './DataTable'
import { useUserContext } from '../Context/LoginContext'

export default function Returned() {
  const {imgs} = useUserContext();
  return (
    <div className='component'>

      <div className="upper-half">
        <div className="component-title"> <img src={imgs.returnedIcon}/> Returned</div>
        <div className="actions-to-perform btn edit-btn"> <img src={imgs.clearIcon} alt="" /> Clear</div>
      </div>

      <DataTable/>
    </div>
  )
}
