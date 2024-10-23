import React from 'react'
import { useUserContext } from '../Context/LoginContext';
import { StockForm } from './Inventory';

export default function DataTable({setshowInsertForm,showInsertForm}) {

    const {imgs,component} = useUserContext();


    const isAllotment = (component == '/allotment');
    const isInventory = (component == '/inventory');
    const isReturned = (component == '/returned');

    const data = [
      { product: 'Example', price: 100, amount: 2, totalPrice: 200, date: '2023-10-22', status: 'Available' },
      { product: 'Example Product', price: 100, amount: 2, totalPrice: 200, date: '2023-10-22', status: 'Available' },
      { product: 'Example Product', price: 100, amount: 2, totalPrice: 200, date: '2023-10-22', status: 'Available' },
      { product: 'Example Product', price: 100, amount: 2, totalPrice: 200, date: '2023-10-22', status: 'Available' },
      { product: 'Example Product', price: 100, amount: 2, totalPrice: 200, date: '2023-10-22', status: 'Available' },
    ];

  return (
    <>
      
      <StockForm showInsertForm={showInsertForm}/>

      <div className="stock-table-container">

        <h2>{component.toUpperCase().slice(1)}</h2>
        
        <table>
          <thead>
            <tr>
              <th>Product</th>
             {!isReturned && <th>Price</th>}
              <th>Amount</th>
             { isInventory && <th>Total Price</th>}
              <th>Date</th>
              {(isAllotment || isReturned) && <th>Branch</th>}
              {isAllotment && <th>Lab</th>}
              {isReturned && <th>Reason</th>}
              <th>Status</th>
              {!isReturned && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
                <tr key={index}>
                <td>{item.product}</td>
                {!isReturned && <td>{item.price}</td>}
                <td>{item.amount}</td>
                {isInventory && <td>{item.totalPrice}</td>}
                <td>{item.date}</td>
                {(isAllotment || isReturned) && <td>cse</td>}
                {isAllotment && <td>software</td>}
                {isReturned && <td>kucch bhi nahi</td>}
                <td>{item.status}</td>
                { !isReturned && <td className='actions'>
                  <button className='actions-to-perform edit-btn btn'> <img src={imgs.editIcon}/> Edit</button>
                  <button className='actions-to-perform delete-btn btn'> <img src={imgs.deleteIcon}/> Delete</button>
                </td>}
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </>
  )
}
