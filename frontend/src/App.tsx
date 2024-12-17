import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";
import Data from "./pages/Data";
import GroceryData from "./pages/GroceryData";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import ShoppingList from "./pages/ShoppingList";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
