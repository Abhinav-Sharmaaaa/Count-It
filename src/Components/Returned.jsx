import React from 'react'
import DataTable from './DataTable'
import { useUserContext } from '../Context/LoginContext'
import { TableDataContext } from '../Context/TableDataContext';

export default function Returned() {
  const {imgs} = useUserContext();

  const data = [
    { product: 'Example jfjkagh ', price: 100, quantity: 2, totalPrice: 200, date: '2023-10-22', status: 'Available', edit:true, delete: true, },
    { product: 'Example Product', price: 100, quantity: 2, totalPrice: 200, date: '2023-10-22', status: 'Available', edit:true, delete: true, },
    { product: 'Example Product', price: 100, quantity: 2, totalPrice: 200, date: '2023-10-22', status: 'Available', edit:true, delete: true, },
    { product: 'Example Product', price: 100, quantity: 2, totalPrice: 200, date: '2023-10-22', status: 'Available', edit:true, delete: true, },
    { product: 'Example Product', price: 100, quantity: 2, totalPrice: 200, date: '2023-10-22', status: 'Available', edit:true, delete: true, },
    ];

    const columns = [
      { header: 'Product', accessor: 'product' },
      { header: 'Price', accessor: 'price' },
      { header: 'Quantity', accessor: 'quantity' },
      { header: 'Date', accessor: 'date' },
      { header: 'Status', accessor: 'status' },
      { header: 'Lab', accessor: '' },
      { header: 'Branch', accessor: '' },
    ];

  return (
    <div className='component'>

      <div className="upper-half">
        <div className="component-title"> <img src={imgs.returnedIcon}/> Returned</div>
        <div className="actions-to-perform btn edit-btn"> <img src={imgs.clearIcon} alt="" /> Clear</div>
      </div>

      <TableDataContext.Provider value={data}>

      <DataTable columns={columns} data={data} showActions={true}/>

      </TableDataContext.Provider>

    </div>
  )
}
