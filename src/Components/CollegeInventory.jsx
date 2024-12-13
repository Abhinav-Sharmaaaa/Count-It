import React, { useState, useEffect } from 'react';
import '../Styles/Inventory.css';
import { useUserContext } from '../Context/LoginContext';
import DataTable from './DataTable';
import DataInsertionForm from './DataInsertionForm';
import { TableDataContext } from '../Context/TableDataContext';
import axios from 'axios';

export default function Inventory() {
  const [showInsertForm, setShowInsertForm] = useState(false);
  const { imgs,role } = useUserContext();
  const [data, setData] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [isEditing, setisEditing] = useState(false);

  const columns = [
    { header: 'Product', accessor: 'productName' },
    { header: 'Price', accessor: 'price' },
    { header: 'Quantity', accessor: 'quantity' },
    { header: 'Total Price', accessor: 'totalPrice' },
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
    console.log([e.target.name]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingItem) {
        // Update existing item
        await axios.put(`https://count-it-login.onrender.com/api/inventory/${editingItem.id}`, formData, {
          headers: { 'X-Requested-With': 'XMLHttpRequest' }
        });
        
        // Update local state with the modified item
        setData(data.map(item => item.id === editingItem.id ? { ...item, ...formData } : item));
        setEditingItem(null);
      } else {
        // Add new item
        const response = await axios.post('https://count-it-login.onrender.com/api/inventory', formData, {
          headers: { 'X-Requested-With': 'XMLHttpRequest' }
        });
        setData([...data, response.data]);
      }
      
      // Reset form data
      setFormData({
        productName: '',
        price: '',
        quantity: '',
        date: '',
        status: '',
      });
      setShowInsertForm(false);
      setisEditing(false);
    } catch (error) {
      console.error('Error adding/updating product:', error);
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData(item);
    setShowInsertForm(true);
    setisEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://count-it-login.onrender.com/api/inventory/${id}`, {
        headers: { 'X-Requested-With': 'XMLHttpRequest' }
      });
      setData(data.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://count-it-login.onrender.com/api/inventory', {
          headers: { 'X-Requested-With': 'XMLHttpRequest' }
        });
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
        <div className="component-title">
          <img src={imgs.inventoryIcon} alt="Inventory" /> Inventory
        </div>
        {role == 'manager' && <div className="actions-to-perform btn" onClick={() => setShowInsertForm(!showInsertForm)}>
          <img src={imgs.plusIcon} alt="Add" /> Insert
        </div>}
      </div>

      <TableDataContext.Provider value={data}>
        <DataInsertionForm fields={fields} formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} showInsertForm={showInsertForm} isEditing={isEditing} />
        <DataTable columns={columns} showActions={role=='manager'?true:false} onDelete={handleDelete} onEdit={handleEdit} />
      </TableDataContext.Provider>
    </div>
  );
}