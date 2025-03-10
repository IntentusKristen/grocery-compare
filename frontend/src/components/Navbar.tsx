import { Link as RouterLink } from "react-router-dom";
import "../style/Navbar.css";
import LogoutButton from "./LogoutButton";
// import {Link} from "react-scroll";
// import { useLocation } from "react-router-dom/dist/umd/react-router-dom.development";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../hooks/useAuth";
import "../style/Navbar.css";

const Navbar: React.FC = () => {
  const { token } = useAuth(); // Assuming useAuth provides the token

  return (
    <div className="navbar">
      <nav>
        <ul className="nav-link">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>

          {!token && (
            <>
              <li>
                <RouterLink to="/login">Login</RouterLink>
              </li>
              <li>
                <RouterLink to="/register">Register</RouterLink>
              </li>
            </>
          )}

          {token && (
            <>
              <li>
                <RouterLink to="/data">Data</RouterLink>
              </li>
              <li>
                <RouterLink to="/settings">Settings</RouterLink>
              </li>
              <li>
                <RouterLink to="/shoppinglist">Create Grocery List</RouterLink>
              </li>
              <li>
                <RouterLink to="/viewShoppingLists">
                  View Grocery Lists
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/grocerydata">Grocery Data</RouterLink>
              </li>
              <div className="logout-container">
                <LogoutButton />
              </div>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
