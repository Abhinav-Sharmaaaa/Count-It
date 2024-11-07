import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';
import { useUserContext } from '../Context/LoginContext';
import DataInsertionForm from './DataInsertionForm';
import { TableDataContext } from '../Context/TableDataContext';

export default function Allotment() {
  const [showInsertForm, setShowInsertForm] = useState(false);
  const { imgs } = useUserContext();

  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    product: '',
    price: '',
    quantity: '',
    status: '',
    lab: '',
    date: '', // Added date field
    branch: '' // Changed to branch
  });

  const [editingItem, setEditingItem] = useState(null); // For editing an item

  // Columns for the table
  const columns = [
    { header: 'Product', accessor: 'product' },
    { header: 'Price', accessor: 'price' },
    { header: 'Quantity', accessor: 'quantity' },
    { header: 'Date', accessor: 'date' },
    { header: 'Branch', accessor: 'branch' }, // Updated header
    { header: 'Lab', accessor: 'Lab' },
    { header: 'Status', accessor: 'status' }
  ];

  // Fields for the form
  const fields = [
    { label: 'Product', name: 'product', type: 'text', required: true },
    { label: 'Price', name: 'price', type: 'number', required: true },
    { label: 'Quantity', name: 'quantity', type: 'number', required: true },
    { label: 'Date', name: 'date', type: 'date', required: true },  // Added date field
    { label: 'Branch', name: 'branch', type: 'select', options:
    [
      { label: 'CSE', value: 'CSE' },
      { label: 'IT', value: 'IT' },
      { label: 'CIVIL', value: 'CIVIL' },
      { label: 'ELEX.', value: 'ELEX.' },
      { label: 'MECH.', value: 'MECH.' },
      { label: 'MECH. Auto', value: 'MECH Auto' },
    ], required: true },
    { label: 'Lab', name: 'Lab', type: 'text', required: true },  // Added date field
    { label: 'Status', name: 'status', type: 'select', options: [{ label: 'Available', value: 'Available' }, { label: 'Out-of-Stock', value: 'Out of Stock' }], required: true },
  ];

  // Fetch data from the backend when the component is mounted
  useEffect(() => {
    fetch('https://count-it-login.onrender.com/api/collegeAllotment')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingItem) {
      // Update an existing item on the backend
      fetch(`https://count-it-login.onrender.com/api/collegeAllotment/${editingItem.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
        .then((response) => response.json())
        .then((updatedItem) => {
          setData(data.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
          setEditingItem(null); // Reset editing mode
          setFormData({ product: '', price: '', quantity: '', status: '', date: '', branch: '' ,lab:''}); // Reset form
        })
        .catch((error) => console.error('Error updating item:', error));
    } else {
      // Add a new item to the backend
      fetch('https://count-it-login.onrender.com/api/collegeAllotment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
        .then((response) => response.json())
        .then((newItem) => {
          setData([...data, newItem]);
          setFormData({ product: '', price: '', quantity: '', status: '', date: '', branch: '' , lab:''}); // Reset form
        })
        .catch((error) => console.error('Error adding item:', error));
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData(item); // Pre-fill form with the selected item's data
    setShowInsertForm(true);
  };

  const handleDelete = (id) => {
    fetch(`https://count-it-login.onrender.com/api/collegeAllotment/${id}`, { method: 'DELETE' })
      .then(() => {
        setData(data.filter((item) => item.id !== id)); // Remove deleted item from state
      })
      .catch((error) => console.error('Error deleting item:', error));
  };

  return (
    <div className="component">
      <div className="upper-half">
        <div className="component-title">
          <img src={imgs.allotmentIcon} alt="Allotment Icon" /> Allotment
        </div>
        <div className="actions-to-perform btn" onClick={() => setShowInsertForm(!showInsertForm)}>
          <img src={imgs.plusIcon} alt="Add" /> Insert
        </div>
      </div>

      <TableDataContext.Provider value={data}>
        <DataInsertionForm
          fields={fields}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          showInsertForm={showInsertForm}
        />
        <DataTable
          columns={columns}
          showActions={true}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </TableDataContext.Provider>
    </div>
  );
}
