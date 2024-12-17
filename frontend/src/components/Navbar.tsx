import { Link as RouterLink } from "react-router-dom";
import "../style/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../hooks/useAuth";

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
                        <li>
                            <RouterLink to="/login">Login</RouterLink>
                        </li>
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
                                <RouterLink to="/shoppinglist">Grocery List</RouterLink>
                            </li>
                            <li>
                        <RouterLink to="/grocerydata">Grocery Data</RouterLink>
                    </li>
                        </>
                    )}

                    
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
