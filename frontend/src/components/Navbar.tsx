import { Link as RouterLink } from "react-router-dom";
import '../style/Navbar.css';
// import {Link} from "react-scroll";
// import { useLocation } from "react-router-dom/dist/umd/react-router-dom.development";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar: React.FC = () => {
    return (
        <div className="navbar">
            <nav>
                <ul className="nav-link">
                    <li>
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/login">Login</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/search">Search</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/settings">Settings</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/shoppinglist">Grocery List</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/grocerydata">Grocery Data</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
