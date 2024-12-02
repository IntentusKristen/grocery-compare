import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../style/Search.css';

type Search = {};

const Search: React.FC<Search> = () => {
  const [formData, setFormData] = useState({ keyword: '', password: '' });
  const [filter, setFilter] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Add your Search logic here
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
              value={formData.keyword}
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

        </form>
      </div>
    </>
  );
};

export default Search;
