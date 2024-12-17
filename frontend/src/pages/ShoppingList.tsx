import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../style/ShoppingList.css";
import { useAuth } from "../hooks/useAuth";

type GroceryItem = {
  id: number;
  name: string;
};

type ShoppingListProps = {};

const ShoppingList: React.FC<ShoppingListProps> = () => {
  const { token } = useAuth();
  const [allItems, setAllItems] = useState<GroceryItem[]>([]);
  const [groceryList, setGroceryList] = useState<
    { id: number; name: string; quantity: number }[]
  >([]);
  const [listName, setListName] = useState<string>("");
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const userId = 1;

  // Fetch all grocery items on component mount
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const baseUrl = process.env.REACT_APP_BASE_URL;
        const response = await fetch(`${baseUrl}/all-grocery-items`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch grocery items.");
        }
        const items: GroceryItem[] = await response.json();
        setAllItems(items);
      } catch (error) {
        console.error("Error fetching items:", error);
        alert("Could not fetch items. Please try again later.");
      }
    };
    fetchItems();
  }, []);

  const handleListNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setListName(e.target.value);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleItemSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedItemId(Number(e.target.value));
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedItemId && quantity > 0) {
      const selectedItem = allItems.find((item) => item.id === selectedItemId);
      if (selectedItem) {
        setGroceryList([
          ...groceryList,
          { id: selectedItem.id, name: selectedItem.name, quantity },
        ]);
        setSelectedItemId(null);
        setQuantity(1);
      }
    }
  };

  const handleRemoveItem = (index: number) => {
    const updatedList = groceryList.filter((_, i) => i !== index);
    setGroceryList(updatedList);
  };

  const handleSaveList = async () => {
    if (groceryList.length === 0) {
      alert("Your shopping list is empty!");
      return;
    }
    if (listName.trim() === "") {
      alert("Please provide a name for your shopping list.");
      return;
    }

    try {
      // Save grocery list
      const groceryListResponse = await fetch(
        "http://localhost:8080/grocery-list",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: listName, user_id: userId }),
        }
      );

      if (!groceryListResponse.ok) {
        alert("Failed to save the grocery list. Please try again.");
        return;
      }

      const { grocery_list_id } = await groceryListResponse.json();

      // Save grocery list items
      const groceryListItems = groceryList.map((item) => ({
        grocery_list_id,
        item_id: item.id,
        quantity: item.quantity,
      }));

      const groceryItemsResponse = await fetch(
        "http://localhost:8080/grocery-list-items",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(groceryListItems),
        }
      );

      if (!groceryItemsResponse.ok) {
        alert("Failed to save grocery list items. Please try again.");
        return;
      }

      alert("Shopping list saved successfully!");
    } catch (error) {
      console.error("Error saving the list:", error);
      alert("An error occurred while saving the list.");
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
            value={listName}
            onChange={handleListNameChange}
            placeholder="Enter a name for your list"
            required
          />
        </div>

        <form onSubmit={handleAddItem} className="grocery-form">
          <select
            onChange={handleItemSelection}
            value={selectedItemId || ""}
            required
          >
            <option value="" disabled>
              Select an item
            </option>
            {allItems.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
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

        {groceryList.length > 0 && (
          <ul className="grocery-list">
            {groceryList.map((item, index) => (
              <li key={index} className="grocery-item">
                {item.name} (x{item.quantity})
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
