import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Data from "./pages/Data";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import ShoppingList from "./pages/ShoppingList";
import GroceryData from "./pages/GroceryData";
import { AuthProvider } from "./hooks/useAuth";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/data"
          element={
            <ProtectedRoute>
              <Data />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shoppinglist"
          element={
            <ProtectedRoute>
              <ShoppingList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/grocerydata"
          element={
            <ProtectedRoute>
              <GroceryData />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
