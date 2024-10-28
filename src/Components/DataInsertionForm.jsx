import React,{useState} from 'react'
import '../Styles/DataInsertionForm.css'

const DataInsertionForm = ({ fields, formData, handleChange, handleSubmit,showInsertForm}) => {

  return (
    <div className={`stock-form-container  ${showInsertForm ? 'insert-form-visible':''}`}>
      <h2>Add New Item</h2>

      <form onSubmit={handleSubmit}  className='insert-form'>

        {fields.map((field, index) => (
          <label key={index}>
            {field.label}:
            {field.type === 'select' ? (

              <select name={field.name} value={formData[field.name]} onChange={handleChange} required={field.required}>
                <option value="" disabled>Select {field.label}</option>
                {field.options.map((option, idx) => (
                  <option key={idx} value={option.value}>{option.label}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
              />
            )}
          </label>
        ))}
        <button className='btn' type="submit">Add Item</button>

      </form>

    </div>
  );
};

export default DataInsertionForm;
