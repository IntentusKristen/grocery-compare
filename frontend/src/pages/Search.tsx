import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../style/Search.css';

type SearchProp = {};
type GroceryItem = {
  id: number;
  name: string;
};

const Search: React.FC<SearchProp> = () => {
  const [keyword, setKeyword] = useState('');
  const [filter, setFilter] = useState('item');
  const [found, setFound] = useState<GroceryItem[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Searching for:', keyword);
    // Add your Search logic here
    if (filter == "item"){
      const fetchItems = async () => {
        try {
          const response = await fetch(`http://localhost:8080/grocery-items/${keyword}`);
          if (!response.ok) {
            throw new Error("Failed to fetch grocery items.");
          }
          const items: GroceryItem[] = await response.json();
          setFound(items);
        } catch (error) {
          console.error("Error fetching items:", error);
          alert("Could not fetch items. Please try again later.");
        }
      };
      fetchItems();
      console.log(found)
    }
  };
  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="search">
        <h2>{"Search Page"}</h2>
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="keyword">Keyword</label>
            <input
              type="text"
              id="keyword"
              name="keyword"
              onChange={handleChange}
              placeholder="Search..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="filter">Filter By:</label>
            <select id="filter" onChange={handleFilter}>
              <option value="item">Item Name</option>
              <option value="store">Store</option>
            </select>
          </div>
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};

export default Search;
