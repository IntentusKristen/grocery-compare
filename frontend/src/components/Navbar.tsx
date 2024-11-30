import { Link as RouterLink } from "react-router-dom";
import '../style/Navbar.css';
// import {Link} from "react-scroll";
// import { useLocation } from "react-router-dom/dist/umd/react-router-dom.development";

  
  const Navbar: React.FC = () => {
    return (
      <div className="navbar">
        <nav>
            <ul className="nav-link">
                <li>
                    <RouterLink to="/login">Login</RouterLink>
                </li>
            </ul>
        </nav>
      </div>
    );
  };
  
  export default Navbar;
  