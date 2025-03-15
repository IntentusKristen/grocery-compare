import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useAuth } from "../hooks/useAuth";
import '../style/Search.css';

type SearchProp = {};
type GroceryItem = {
  product_id: number;
  price: number;
  groceryStore: Store;
  date: string
};
type Store = {
  id: number;
  name: string;
  address: string;
};

const Search: React.FC<SearchProp> = () => {
  const { token } = useAuth();
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [keyword, setKeyword] = useState('');
  const [filter, setFilter] = useState<GroceryItem[]>([]);
  const [found, setFound] = useState<GroceryItem[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Searching for:', keyword);

    const fetchItems = async () => {
      try {
        const response = await fetch(`${baseUrl}/search/${keyword}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch grocery items.");
        }
        const items: GroceryItem[] = await response.json();

        console.dir(items, { 'maxArrayLength': null });

        setFilter(items)
        setFound(items);
      } catch (error) {
        console.error("Error fetching items:", error);
        alert("Could not fetch items. Please try again later.");
      }
    }
    fetchItems();
  };
  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let items = []
    if (e.target.value == "None") {
      items = found
    }
    else {
      for (let i = 0; i < found.length; i++) {
        if (found[i].groceryStore.id.toString() == e.target.value) {
          items.push(found[i])
        }
      }
    }

    setFilter(items)
  };
  const handleOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let items = [...filter]

    if (e.target.value == "Asc") {
      items.sort((a, b) => a.price - b.price);
    }
    else if (e.target.value == "Desc") {
      items.sort((a, b) => b.price - a.price);
    }

    setFilter(items)
  };

  return (
    <>
      <Navbar />
      <div className="search">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="keyword">Keyword</label>
            <div className="input-container">
              <input
                type="text"
                id="keyword"
                name="keyword"
                onChange={handleChange}
                placeholder="Search..."
                required
              />
              <button type="submit">Search</button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="filter">Filter By Store:</label>
            <select id="filter" onChange={handleFilter}>
              <option value="None">None</option>
              {found.map((item) => (
                <option value={item.groceryStore.id}>{item.groceryStore.name}, {item.groceryStore.address}</option>
              ))}
            </select>
            <label htmlFor="filter">Order By Price:</label>
            <select id="filter" onChange={handleOrder}>
              <option value="None">None</option>
              <option value="Asc">Ascending</option>
              <option value="Desc">Descending</option>
            </select>
          </div>
          {filter.map((item) => (
            <div>
              <h2>{item.product_id}</h2>
              <h3>Store: {item.groceryStore.name}, {item.groceryStore.address}</h3>
              <h3>Price: {item.price}</h3>
              <h3>Information Last Updated: {item.date}</h3>
            </div>
          ))}
        </form>
      </div>
    </>
  );
};

export default Search;