import { useState } from 'react';
import Navbar from '../components/Navbar';
import '../style/ShoppingList.css';

type ShoppingList = {};

const ShoppingList: React.FC<ShoppingList> = () => {
  const [item, setItem] = useState<string>(''); 
  const [quantity, setQuantity] = useState<number>(1); 
  const [listName, setListName] = useState<string>(''); 
  const [groceryList, setGroceryList] = useState<{ name: string; quantity: number }[]>([]); 

  const handleItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem(e.target.value);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleListNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setListName(e.target.value);
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the page from reloading
    if (item.trim() !== '') {
      setGroceryList([...groceryList, { name: item, quantity }]);
      setItem(''); // Reset the input field after adding an item
      setQuantity(1); // Reset the quantity after adding the item
    }
  };

  const handleRemoveItem = (index: number) => {
    const updatedList = groceryList.filter((_, i) => i !== index);
    setGroceryList(updatedList);
  };

  // Function to handle the save action
  const handleSaveList = async () => {
    if (groceryList.length === 0) {
      alert('Your shopping list is empty!');
      return;
    }
    if (listName.trim() === '') {
      alert('Please provide a name for your shopping list.');
      return;
    }

    try {
      const response = await fetch('/api/save-grocery-list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ listName, groceryList }),
      });

      if (response.ok) {
        alert('Shopping list saved successfully!');
      } else {
        alert('Failed to save the list. Please try again.');
      }
    } catch (error) {
      console.error('Error saving the list:', error);
      alert('An error occurred while saving the list.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="grocery-list-container">
        <h2>Shopping List</h2>

        <div>
          <input
            type="text"
            id="list-name"
            value={listName}
            onChange={handleListNameChange}
            placeholder="Enter a name for your list"
            required
          />
        
        <form onSubmit={handleAddItem} className="grocery-form">
          <input
            type="text"
            value={item}
            onChange={handleItemChange}
            placeholder="Enter item name"
            required
          />
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            placeholder="Quantity"
            required
          />
          <button type="submit">Add Item</button>
        </form>

   
        </div>

        {groceryList.length > 0 && (
          <ul className="grocery-list">
            {groceryList.map((groceryItem, index) => (
              <li key={index} className="grocery-item">
                {groceryItem.name} (x{groceryItem.quantity})
                <button
                  onClick={() => handleRemoveItem(index)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        {groceryList.length === 0 && <p>Your shopping list is empty!</p>}

        <button onClick={handleSaveList} className="save-btn">
          Save List
        </button>
      </div>
    </>
  );
};

export default ShoppingList;
