import "../Navbar/navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link className="nav-logo" to="/">
          BOOKSTOCK
        </Link>
        <ul className="nav-list">
          <li className="nav-list-items">
            <div>
              <Link to="/">
                {" "}
                <i className="badge-icon fas fa-heart nav-icon"></i>
              </Link>
              <div className="badge-text">9</div>
            </div>
          </li>
          <li className="nav-list-items">
            <div>
              <Link to="/">
                <i className="badge-icon fas fa-shopping-cart nav-icon"></i>
              </Link>
              <div className="badge-text">3</div>
            </div>
          </li>
          <li className="nav-list-items profile">
            <div>
              <Link to="/">
                <i className="fas fa-user nav-icon"></i>
              </Link>
            </div>
          </li>
        </ul>
        <div className="nav-search-container">
          <input className="nav-search-text" type="text" />
          <button className="nav-search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};
