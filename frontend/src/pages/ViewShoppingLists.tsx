import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../style/ShoppingList.css";
import { useAuth } from "../hooks/useAuth";
import { jwtDecode } from "jwt-decode";

type GroceryList = {
  id: number;
  name: string;
};

const ViewShoppingLists: FunctionComponent = () => {
  const { token } = useAuth();
  const userId = jwtDecode(token ? token : "").iss;
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const [shoppingLists, setShoppingLists] = useState<GroceryList[]>([]);
  const [selectedListId, setSelectedListId] = useState<Number | null>(null);

  useEffect(() => {
    const fetchShoppingLists = async () => {
      try {
        const response = await fetch(`${baseUrl}/grocery-lists/${userId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch shopping lists.");
        }

        const groceryLists: GroceryList[] = await response.json();
        setShoppingLists(groceryLists);
      } catch (error) {
        console.error("Error fetching shopping lists:", error);
        alert("Could not fetch shopping lists.");
      }
    };
    fetchShoppingLists();
  }, [baseUrl, token, userId]);

  const handleItemSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedListId(Number(e.target.value));
  };

  return (
    <>
      <Navbar />
      <div className="selectShoppingList">
        <h1>Select Shopping List</h1>
        <div className="shoppingList">
          <select
            onChange={handleItemSelection}
            value={String(selectedListId) || ""}
          >
            <option value="">Select a shopping list</option>
            {shoppingLists.map((list) => (
              <option key={list.id} value={list.id}>
                {list.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default ViewShoppingLists;
