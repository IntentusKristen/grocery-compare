import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../style/GroceryData.css';

type GroceryItem = {
  name: string;
  price: number;
  store: string;
};

const GroceryData: React.FC = () => {
  const [formData, setFormData] = useState<GroceryItem>({
    name: '',
    price: 0,
    store: '',
  });

  const [statusMessage, setStatusMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setStatusMessage('Submitting...');

      const response = await fetch('http://localhost:8080/grocery-item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });

      if (response.ok) {
        setStatusMessage('Grocery item added successfully!');
        setFormData({ name: '', price: 0, store: '' });
      } else {
        // Handle error response from the server
        const errorData = await response.json();
        setStatusMessage(`Error: ${errorData.message || 'Failed to add item'}`);
      }
    } catch (error) {
      // Handle network or other errors
      setStatusMessage('Network error. Please try again later.');
    }
  };

  return (
    <>
      <Navbar />
      
      <div className="grocery-form">
      
        <form onSubmit={handleSubmit}>
          <h3>Add a Grocery Item</h3>
          <div className="form-group">
            <label htmlFor="name">Item Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter item name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter item price"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="store">Store</label>
            <input
              type="text"
              id="store"
              name="store"
              value={formData.store}
              onChange={handleChange}
              placeholder="Enter store name"
              required
            />
          </div>

          <button type="submit">Add Item</button>
        </form>

        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </div>
    </>
  );
};

export default GroceryData;
