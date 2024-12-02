import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GroceryData from './pages/GroceryData';
import Home from './pages/Home';
import Login from './pages/Login';
import Search from './pages/Search';
import Settings from './pages/Settings';
import ShoppingList from './pages/ShoppingList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/search" element={<Search />} />
          <Route path="/shoppinglist" element={<ShoppingList />} />
          <Route path="/grocerydata" element={<GroceryData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
