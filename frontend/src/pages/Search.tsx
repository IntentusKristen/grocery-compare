import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../style/Search.css';

// type SearchProp = {};
// type GroceryItem = {
//   id: number;
//   name: string;
// };

// const Search: React.FC<SearchProp> = () => {
//   const [keyword, setKeyword] = useState('');
//   const [filter, setFilter] = useState('item');
//   const [found, setFound] = useState<GroceryItem[]>([]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setKeyword(e.target.value);
//   };
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log('Searching for:', keyword);
//     // Add your Search logic here
//     const fetchItems = async () => {
//       try {
//         //filter by item
//         if (filter == "item") {
//           const response = await fetch(`http://localhost:8080/grocery-items/${keyword}`);

//           if (!response.ok) {
//             throw new Error("Failed to fetch grocery items.");
//           }
//           const items: GroceryItem[] = await response.json();
//           setFound(items);
//         }
//         //filter by store
//         else {
//           const response = await fetch(`http://localhost:8080/grocery-items/${keyword}`);

//           if (!response.ok) {
//             throw new Error("Failed to fetch grocery items.");
//           }
//           const items: GroceryItem[] = await response.json();
//           setFound(items);
//         }
//       } catch (error) {
//         console.error("Error fetching items:", error);
//         alert("Could not fetch items. Please try again later.");
//       }

//       fetchItems();
//       console.log(found)
//     }
//   };
//   const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setFilter(e.target.value);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="search">
//         <h2>{"Search Page"}</h2>
//         <form className="search-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="keyword">Keyword</label>
//             <input
//               type="text"
//               id="keyword"
//               name="keyword"
//               onChange={handleChange}
//               placeholder="Search..."
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="filter">Filter By:</label>
//             <select id="filter" onChange={handleFilter}>
//               <option value="item">Item Name</option>
//               <option value="store">Store</option>
//               <option value="test">Test</option>
//             </select>
//           </div>
//           <button type="submit">Search</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Search;

type SearchProp = {};
type GroceryItem = {
  product_id: number;
  price: number;
  store_id: number;
  date: string
};

const Search: React.FC<SearchProp> = () => {
  const [keyword, setKeyword] = useState('');
  const [filter, setFilter] = useState<GroceryItem[]>([]);
  const [found, setFound] = useState<GroceryItem[]>([]);
  const [stores, setStores] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Searching for:', keyword);
    // Add your Search logic here
    const fetchItems = async () => {
      try {
        //template to pull from backend
        // const response = await fetch(`http://localhost:8080/grocery-items/${keyword}`);

        // if (!response.ok) {
        //   throw new Error("Failed to fetch grocery items.");
        // }
        // const items: GroceryItem[] = await response.json();
        const items: GroceryItem[] = [
          {"product_id": 1, "price": 0.99, "store_id": 1, "date": "2025-03-01"},
          {"product_id": 1, "price": 1.09, "store_id": 2, "date": "2025-03-02"},
          {"product_id": 1, "price": 0.95, "store_id": 3, "date": "2025-03-03"},
          {"product_id": 1, "price": 1.15, "store_id": 4, "date": "2025-03-04"}
          // {"product_id": 2, "price": 0.59, "store_id": 1, "date": "2025-03-01"},
          // {"product_id": 2, "price": 0.65, "store_id": 2, "date": "2025-03-02"},
          // {"product_id": 2, "price": 0.55, "store_id": 3, "date": "2025-03-03"},
          // {"product_id": 2, "price": 0.60, "store_id": 4, "date": "2025-03-04"},
          // {"product_id": 3, "price": 2.49, "store_id": 1, "date": "2025-03-01"},
          // {"product_id": 3, "price": 2.59, "store_id": 2, "date": "2025-03-02"},
          // {"product_id": 3, "price": 2.39, "store_id": 3, "date": "2025-03-03"},
          // {"product_id": 3, "price": 2.55, "store_id": 4, "date": "2025-03-04"},
          // {"product_id": 4, "price": 1.99, "store_id": 1, "date": "2025-03-01"},
          // {"product_id": 4, "price": 2.09, "store_id": 2, "date": "2025-03-02"},
          // {"product_id": 4, "price": 1.95, "store_id": 3, "date": "2025-03-03"},
          // {"product_id": 4, "price": 2.10, "store_id": 4, "date": "2025-03-04"},
          // {"product_id": 5, "price": 3.49, "store_id": 1, "date": "2025-03-01"},
          // {"product_id": 5, "price": 3.59, "store_id": 2, "date": "2025-03-02"},
          // {"product_id": 5, "price": 3.39, "store_id": 3, "date": "2025-03-03"},
          // {"product_id": 5, "price": 3.55, "store_id": 4, "date": "2025-03-04"},
          // {"product_id": 6, "price": 5.99, "store_id": 1, "date": "2025-03-01"},
          // {"product_id": 6, "price": 6.09, "store_id": 2, "date": "2025-03-02"},
          // {"product_id": 6, "price": 5.95, "store_id": 3, "date": "2025-03-03"},
          // {"product_id": 6, "price": 6.10, "store_id": 4, "date": "2025-03-04"},
          // {"product_id": 7, "price": 3.99, "store_id": 1, "date": "2025-03-01"},
          // {"product_id": 7, "price": 4.09, "store_id": 2, "date": "2025-03-02"},
          // {"product_id": 7, "price": 3.95, "store_id": 3, "date": "2025-03-03"},
          // {"product_id": 7, "price": 4.10, "store_id": 4, "date": "2025-03-04"}
      ]
      
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
    if (e.target.value == "None"){
      items = found
    }
    else{
      for (let i = 0; i < found.length; i++){
        if (found[i].store_id.toString() == e.target.value){
          items.push(found[i])
        }
      }
    }
    
    setFilter(items)
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
            <label htmlFor="filter">Store:</label>
            <select id="filter" onChange={handleFilter}>
              <option value="None">None</option>
              {found.map((item) => (
                <option value={item.store_id}>{item.store_id}</option>
              ))}
            </select>
          </div>
          {filter.map((item) => (
            <div>
              <h2>{item.product_id}</h2>
              <h3>Store: {item.store_id}</h3>
              <h3>Price: {item.price}</h3>
              <h3>Information Last Updated: {item.date}</h3>
            </div>
          ))}
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};

export default Search;