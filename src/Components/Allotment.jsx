import React from 'react'
import DataTable from './DataTable'
import { useUserContext } from '../Context/LoginContext'

export default function Allotment() {

  const {imgs} = useUserContext();

  return (
    <div className='component'>
      <div className="upper-half">
        <div className="component-title"> <img src={imgs.allotmentIcon}/> Allotment</div>
        <div className="actions-to-perform btn"> <img src={imgs.plusIcon} alt="" /> Insert</div>
      </div>

      <DataTable/>
    </div>
  )
}
