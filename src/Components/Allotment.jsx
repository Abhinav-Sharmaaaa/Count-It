import React,{useState} from 'react'
import DataTable from './DataTable'
import { useUserContext } from '../Context/LoginContext'
import DataInsertionForm from './DataInsertionForm';
import { TableDataContext } from '../Context/TableDataContext';
import { type } from '@testing-library/user-event/dist/type';

export default function Allotment() {

  const [showInsertForm, setshowInsertForm] = useState(false)
  const {imgs} = useUserContext();

  const [data, setdata] = useState( [
    { product: 'Example', price: 100, quantity: 2, totalPrice: 200, date: '2023-10-22', status: 'Available', edit:true, delete: true, },
    { product: 'Example Product', price: 100, quantity: 2, totalPrice: 200, date: '2023-10-22', status: 'Available', edit:true, delete: true, },
    { product: 'Example Product', price: 100, quantity: 2, totalPrice: 200, date: '2023-10-22', status: 'Available', edit:true, delete: true, },
    { product: 'Example Product', price: 100, quantity: 2, totalPrice: 200, date: '2023-10-22', status: 'Available', edit:true, delete: true, },
    { product: 'Example Product', price: 100, quantity: 2, totalPrice: 200, date: '2023-10-22', status: 'Available', edit:true, delete: true, },
    ]);

  const columns = [
    { header: 'Product', accessor: 'product' },
    { header: 'Price', accessor: 'price' },
    { header: 'Quantity', accessor: 'quantity' },
    { header: 'Total Price', accessor: 'totalPrice' },
    { header: 'Date', accessor: 'date' },
    { header: 'Status', accessor: 'status' },
  ];

  const fields = [
    { label: 'Product', name: 'product', type: 'text', required: true },
    { label: 'Price', name: 'price', type: 'number', required: true },
    { label: 'Quantity', name: 'quantity', type: 'number', required: true },
    { label: 'Status', name: 'status', type: 'select', options: [{ label: 'Available', value: 'Available' }, { label: 'Out-of-Stock', value: 'Out of Stock' }], required: true },
    { label: 'Extra Field', name: 'extraField', type: 'text', required: true }, 
  ]

  const [formData, setFormData] = useState({
    product: '',
    price: '',
    amount: '',
    status: '',
    extraField: ''
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setdata(...data,formData);
  };


  return (
    <div className='component'>
      <div className="upper-half">
        <div className="component-title"> <img src={imgs.allotmentIcon}/> Allotment</div>
        <div className="actions-to-perform btn"  onClick={()=>setshowInsertForm(!showInsertForm)}> <img src={imgs.plusIcon} alt="" /> Insert</div>
      </div>

    <TableDataContext.Provider value={data}>

    <DataInsertionForm fields={fields} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} showInsertForm={showInsertForm}/>
    <DataTable columns={columns} showActions={true}/>

    </TableDataContext.Provider>
    </div>
  )
}
