import React from 'react';
import { useUserContext } from '../Context/LoginContext';
import { useTableDataContext } from '../Context/TableDataContext';

export default function DataTable({ columns, showActions, onDelete, onEdit }) {
  const { imgs, component} = useUserContext();
  const data = useTableDataContext();
  let  role = localStorage.getItem("role");


  return (
    <div className="stock-table-container">
      <h2>{component.toUpperCase().slice(1)}</h2>

      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
            {showActions && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                column.accessor === 'totalPrice' ? 
                <td key={colIndex}>{row.quantity * row.price}</td> :
                <td key={colIndex}>{row[column.accessor]}</td>
              ))}
              {(showActions && role =='manager') && (
                <td className="actions">
                  <button
                    className="actions-to-perform edit-btn btn"
                    onClick={() => onEdit(row)} // Call onEdit function with row data
                  >
                  <img src={imgs.editIcon} alt="Edit" /> Edit
                  </button>
                  <button
                    className="actions-to-perform delete-btn btn"
                    onClick={() => onDelete(row.id)} // Call onDelete function with row ID
                  >
                    <img src={imgs.deleteIcon} alt="Delete" /> Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
