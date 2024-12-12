import React, { useState, useEffect } from 'react';
import '../Styles/Inventory.css';
import { useUserContext } from '../Context/LoginContext';
import DataTable from './DataTable'; // You can reuse this component to display data in a table
import { TableDataContext } from '../Context/TableDataContext';
import axios from 'axios';

export default function TeacherCollegeInventory() {
  const { imgs } = useUserContext();
  const [data, setData] = useState([]);

  const columns = [
    { header: 'Product', accessor: 'productName' },
    { header: 'Price', accessor: 'price' },
    { header: 'Quantity', accessor: 'quantity' },
    { header: 'Total Price', accessor: 'totalPrice' },
    { header: 'Date', accessor: 'date' },
    { header: 'Status', accessor: 'status' },
  ];

  // Fetch data when the component mounts
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
          <img src={imgs.inventoryIcon} alt="Inventory" /> College Inventory
        </div>
      </div>

      <TableDataContext.Provider value={data}>
        <DataTable columns={columns} showActions={false} /> {/* Disable the actions */}
      </TableDataContext.Provider>
    </div>
  );
}
