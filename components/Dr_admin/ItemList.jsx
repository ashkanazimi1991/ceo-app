import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(null);
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  
  const addItem = () => {
    const newItem = {
      title: title,
      date: date,
      price: parseFloat(price)
    };
    setItems([...items, newItem]);
    setTitle('');
    setDate(null);
    setPrice('');
  };
  
  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };
  
  const editItem = (index, updatedItem) => {
    const updatedItems = [...items];
    updatedItems[index] = updatedItem;
    setItems(updatedItems);
  };
  
  const calculateTotal = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price;
    });
    return total.toFixed(2);
  };
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-md border-b-2 py-2 border-gray-500 text-center text-gray-200 mb-4">آیتم جدید</h1>
      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border w-full my-4 border-gray-300 px-2 py-1 rounded"
        >
          <option value="">انتخاب دسته بندی</option>
          <option value="Category 1">  اجاره</option>
          <option value="Category 2">حقوق پرسنل</option>
          <option value="Category 3">تنخواه</option>
        </select>
      </div>
      <div className="mb-4 ">
        <label htmlFor="title" className="block text-right text-gray-200 mb-2">عنوان</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 px-2 w-full py-1 rounded"
          style={{direction:'rtl'}}
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="date" className="block text-right text-gray-200 mb-2">تاریخ</label>
        <DatePicker
          id="date"
          selected={date}
          onChange={(date) => setDate(date)}
          className="border border-gray-300  px-2 py-1 rounded"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="price" className="block text-right text-gray-200 mb-2">مبلغ</label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border w-full border-gray-300 px-2 py-1 rounded"
        />
      </div>
      
      <button
        onClick={addItem}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        ثبت
      </button>
      
      <ul className="mt-4">
        {items.map((item, index) => (
          <li key={index} className="border-b border-gray-300 py-2">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg text-gray-200 font-bold">{item.title}</h2>
                <p className="text-gray-200">{item.date.toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-lg text-gray-200 ">{item.price.toFixed(2)}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => deleteItem(index)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => editItem(index, item)}
                    className="text-blue-500"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      
      <div className="mt-4">
        <p className="text-lg text-blue-300">کل: {calculateTotal()}</p>
      </div>
    </div>
  );
};

export default ItemList;
