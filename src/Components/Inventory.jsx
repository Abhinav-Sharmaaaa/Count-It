import React, { useState, useEffect } from 'react';
import '../Styles/Inventory.css';
import { useUserContext } from '../Context/LoginContext';
import DataTable from './DataTable';
import DataInsertionForm from './DataInsertionForm';
import { TableDataContext } from '../Context/TableDataContext';
import axios from 'axios';

export default function Inventory() {
  const [showInsertForm, setshowInsertForm] = useState(false);
  const { imgs } = useUserContext();
  const [data, setData] = useState([]);

  const columns = [
    { header: 'Product', accessor: 'productName' },
    { header: 'Price', accessor: 'price' },
    { header: 'Quantity', accessor: 'quantity' },
    { header: 'Date', accessor: 'date' },
    { header: 'Status', accessor: 'status' },
  ];

  const fields = [
    { label: 'Product', name: 'productName', type: 'text', required: true },
    { label: 'Price', name: 'price', type: 'number', required: true },
    { label: 'Quantity', name: 'quantity', type: 'number', required: true },
    { label: 'Date', name: 'date', type: 'date', required: true },
    { label: 'Status', name: 'status', type: 'select', options: [{ label: 'Available', value: 'Available' }, { label: 'Out-of-Stock', value: 'Out of Stock' }], required: true },
  ];

  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    quantity: '',
    date: '',
    status: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://count-it-login.onrender.com/inventory/products', formData);
      setData([...data, response.data]);
      setFormData({
        productName: '',
        price: '',
        quantity: '',
        date: '',
        status: '',
      });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://count-it-login.onrender.com/inventory/products');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='component'>
      <div className="upper-half">
        <div className="component-title"> <img src={imgs.inventoryIcon}/> Inventory</div>
        <div className="actions-to-perform btn" onClick={() => setshowInsertForm(!showInsertForm)}> <img src={imgs.plusIcon} alt="" /> Insert</div>
      </div>

      <TableDataContext.Provider value={data}>
        <DataInsertionForm fields={fields} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} showInsertForm={showInsertForm} />
        <DataTable columns={columns} showActions={true} />
      </TableDataContext.Provider>
    </div>
  );
}