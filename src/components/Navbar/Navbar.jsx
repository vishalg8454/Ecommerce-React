import "../Navbar/navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import { useUser } from "../../context/user-context";

export const Navbar = () => {
  const {
    state: { cartList },
  } = useCart();
  const { encodedToken } = useUser();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link className="nav-logo" to="/">
          BOOKSTOCK
        </Link>
        <ul className="nav-list">
          <li className="nav-list-items desktop-cta">
            {encodedToken ? (
              <Link to="/">
              <button className="btn btn-primary-outline  nav-cta">
                Logout
              </button>
            </Link>
            ) : (
              <Link to="/login">
                <button className="btn btn-primary-outline  nav-cta">
                  Login
                </button>
              </Link>
            )}
          </li>
          <li className="nav-list-items">
            <div>
              <Link to="/wishlist">
                {" "}
                <i className="badge-icon fas fa-heart nav-icon"></i>
              </Link>
              <div className="badge-text">9</div>
            </div>
          </li>
          <li className="nav-list-items">
            <div>
              <Link to="/cart">
                <i className="badge-icon fas fa-shopping-cart nav-icon"></i>
              </Link>
              {cartList.length > 0 && (
                <div className="badge-text">{cartList.length}</div>
              )}
            </div>
          </li>
          <li className="nav-list-items profile mobile-cta">
            <div>
              <Link to="/login">
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
