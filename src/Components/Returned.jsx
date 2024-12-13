import React,{useState} from 'react'
import DataTable from './DataTable'
import { useUserContext } from '../Context/LoginContext'
import { TableDataContext } from '../Context/TableDataContext';

export default function Returned() {
  const {imgs,role} = useUserContext();

  const [data, setdata] = useState([
    { product: 'Example jfjkagh ', quantity: 2, date: '2023-10-22',branch:'cse',reason:'unkown', status: 'Available',},
    { product: 'Example Product', quantity: 2, date: '2023-10-22',branch:'cse',reason:'unkown', status: 'Available', },
    { product: 'Example Product', quantity: 2, date: '2023-10-22',branch:'cse',reason:'unkown', status: 'Available', },
    { product: 'Example Product', quantity: 2, date: '2023-10-22',branch:'cse',reason:'unkown', status: 'Available', },
    { product: 'Example Product', quantity: 2, date: '2023-10-22',branch:'cse',reason:'unkown', status: 'Available', },
    ]);


    const columns = [
      { header: 'Product', accessor: 'product' },
      { header: 'Quantity', accessor: 'quantity' },
      { header: 'Date', accessor: 'date' },
      { header: 'Branch', accessor: 'branch' },
      { header: 'Reason', accessor: 'reason' },
      { header: 'Status', accessor: 'status' },
    ];

    function clear(){
      setdata([]);
    }

  return (
    <div className='component'>

      {role == "manager" && <div className="upper-half">
        <div className="component-title"> <img src={imgs.returnedIcon}/> Returned</div>
        <div className="actions-to-perform btn edit-btn" onClick={clear}> <img src={imgs.clearIcon} alt="" /> Clear</div>
      </div>}

      <TableDataContext.Provider value={data}>

      <DataTable columns={columns} data={data}/>

      </TableDataContext.Provider>

    </div>
  )
}
