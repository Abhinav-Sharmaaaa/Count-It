import React from 'react'
import { useUserContext } from '../Context/LoginContext';
import { useTableDataContext } from '../Context/TableDataContext';

export default function DataTable({columns,showActions}) {

  const {imgs,component} = useUserContext();
  const data = useTableDataContext();

  return (
    <>

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
                <td key={colIndex}>{row[column.accessor]}</td>
              ))}
              {showActions && (
                <td className='actions'>
                  {row.edit !== undefined && <button className='actions-to-perform edit-btn btn'> <img src={imgs.editIcon}/> Edit</button>
                }
                  {row.delete !== undefined && <button className='actions-to-perform delete-btn btn'> <img src={imgs.deleteIcon}/> Delete</button>
                }
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      </div>

    </>
  )
}
