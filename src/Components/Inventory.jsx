import React,{useState} from 'react'
import '../Styles/Inventory.css'
import { useUserContext } from '../Context/LoginContext';
import DataTable from './DataTable';


export default function Inventory() {

  const [showInsertForm, setshowInsertForm] = useState(false);
  const {imgs} = useUserContext();

  return(
    <div className='component'>

      <div className="upper-half">
        <div className="component-title"> <img src={imgs.inventoryIcon}/> Inventory</div>
        <div className="actions-to-perform btn"  onClick={()=>setshowInsertForm(!showInsertForm)}> <img src={imgs.plusIcon} alt="" /> Insert</div>
      </div>

      <DataTable showInsertForm={showInsertForm} setshowInsertForm={setshowInsertForm}/>

    </div>
  );
}

export const StockForm = ({ addItem , showInsertForm}) => {
  const [formData, setFormData] = useState({
    product: '',
    price: '',
    amount: '',
    totalPrice: '',
    date: '',
    status: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(formData);
    setFormData({
      product: '',
      price: '',
      amount: '',
      totalPrice: '',
      date: '',
      status: ''
    });
  };

  return (
    <div className={`stock-form-container  ${showInsertForm ? 'insert-form-visible':''}`}>
      <h2>Add New Item</h2>
      <form className='insert-form' onSubmit={handleSubmit}>
        <label>
          Product:
          <input type="text" name="product" value={formData.product} onChange={handleChange} required />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </label>
        <label>
          Amount:
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
        </label>
        <label>
          Total Price:
          <input type="number" name="totalPrice" value={formData.totalPrice} onChange={handleChange} required />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>
        <label>
          Status:
          <input type="text" name="status" value={formData.status} onChange={handleChange} required />
        </label>
        <button className='btn' type="submit">Add Item</button>
      </form>
    </div>
  );
};

