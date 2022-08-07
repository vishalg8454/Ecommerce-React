import { useState, useEffect, useRef } from "react";
import "./profilepage.css";
// import { useUser } from "../../context/user-context";
// import { useCart } from "../../context/cart-context";
import { useUser, useCart,useWishlist } from "../../context";
import { Link, NavLink, Outlet } from "react-router-dom";

export const ProfilePage = () => {
  const { dispatch } = useCart();
  const {resetFavorites} = useWishlist();
  const [email, setEmail] = useState("testuser@example.com");
  const [password, setPassword] = useState("strongPass");

  const { loginUser, encodedToken, logout } = useUser();

  useEffect(() => {
    document.title = "BookStock | Login";
  }, []);

  function setGuestCredential(event) {
    event.preventDefault();
    setEmail("testuser@example.com");
    setPassword("strongPass");
  }

  function loginHandler({ event, email, password }) {
    event.preventDefault();
    loginUser({ email, password });
  }

  let activeStyle = {
    backgroundColor: "var(--color-light-gray)",
    color: "var(--color-primary)",
    padding: "0.5rem",
  };

  let inactiveStyle = {
    color: "var(--color-black)",
  };

  if (encodedToken) {
    return (
      <div className="profile-page">
        <div className="nav-container navlink-container">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
            className="navlink"
            to="/profile/address"
          >
            Address
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
            className="navlink"
            to="/profile/orders"
          >
            Orders
          </NavLink>
        </div>
        <Outlet />
        <div className="logout-container">
        <button
          className="logout-btn"
          onClick={() => {
            logout();
            dispatch({ type: "RESET" });
            resetFavorites();
          }}
        >
          Logout
        </button>
        </div>
      </div>
    );
  }
  return (
    <div className="signin-container">
      <form className="form-wrapper">
        <label className="input-label" htmlFor="email">
          Email Address{" "}
        </label>
        <input
          className="input"
          type="email"
          name="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="input-label" htmlFor="password">
          Password{" "}
        </label>
        <input
          className="input"
          type="password"
          name="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="checkbox-div">
          <input type="checkbox" name="remember" />
          <label htmlFor="remember"> Remember me</label>
        </div>
        <span className="input-label btn-link">
          <a href="#">Forgot your Password?</a>
        </span>
        <input
          className="btn btn-primary-solid btn-login"
          type="submit"
          value="Login"
          onClick={(event) => loginHandler({ event, email, password })}
        />
        <button
          className="btn btn-secondary-solid btn-login"
          onClick={(e) => setGuestCredential(e)}
        >
          Use guest credentials
        </button>
        <div className="link-container">
          <Link to={"/signup"}>Create New Account</Link>
        </div>
      </form>
    </div>
  );
};
