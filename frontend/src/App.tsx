import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Data from './pages/Data';
import Home from './pages/Home';
import Login from './pages/Login';
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
          <Route path="/data" element={<Data />} />
          <Route path="/shoppinglist" element={<ShoppingList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
