import "./cart-card.css";
import { useUser } from "../../context/user-context";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import axios from "axios";
import { useState } from "react";

const CartCard = ({ image, title, price, includeStock, _id, qty }) => {
  const { encodedToken } = useUser();
  const { dispatch } = useCart();
  const { wishlistList, setWishlistList } = useWishlist();
  const [loading, setLoading] = useState(false);
  const [favoriteLoading, setFavoriteLoading] = useState(false);

  const incrementItem = async () => {
    setLoading(true);
    try {
      const cartData = await axios.post(
        `/api/user/cart/${_id}`,
        {
          action: { type: "increment" },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      dispatch({ type: "SET_CART", payload: cartData.data.cart });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const decrementItem = async () => {
    setLoading(true);
    try {
      const cartData = await axios.post(
        `/api/user/cart/${_id}`,
        {
          action: { type: "decrement" },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      dispatch({ type: "SET_CART", payload: cartData.data.cart });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async () => {
    try {
      const cartData = await axios.delete(`/api/user/cart/${_id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      dispatch({ type: "SET_CART", payload: cartData.data.cart });
    } catch (error) {}
  };

  const addToWishList = async () => {
    try {
      setFavoriteLoading(true);
      const wishlistData = await axios.post(
        "/api/user/wishlist",
        {
          product: { _id },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      setWishlistList(wishlistData.data.wishlist);
    } catch (error) {
      showToast({ message: "Sign in to add items wishlist", type: "failure" });
    } finally {
      setFavoriteLoading(false);
    }
  };

  const removeFromWishList = async () => {
    try {
      setFavoriteLoading(true);
      const wishlistData = await axios.delete(`/api/user/wishlist/${_id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      setWishlistList(wishlistData.data.wishlist);
    } catch (error) {
      showToast({
        message: "Unable to remove items from wishlist",
        type: "failure",
      });
    } finally {
      setFavoriteLoading(false);
    }
  };

  return (
    <div className="card-container card-horizontal">
      <img className="cart-card-image" src={image} alt="Item Image" />
      <div className="cart-card-container">
        <h6 className="card-title">{title}</h6>
        <p className="card-description cart-card-price">{`₹${price}`}</p>
        <div className="cart-card-btn-container card-btn-container">
          <button className="card-btn card-btn-primary" onClick={removeItem}>
            Remove
          </button>
          <button className="card-btn card-btn-secondary">
            Save For Later
          </button>
          {wishlistList.some((item) => item._id === _id) ? (
            <button
              onClick={() => removeFromWishList(_id)}
              disabled={favoriteLoading}
            >
              <i
                style={{ color: "red", fontSize: "x-large" }}
                className="card-btn-icon fas fa-heart"
              ></i>
            </button>
          ) : (
            <button
              onClick={() => addToWishList(_id)}
              disabled={favoriteLoading}
            >
              <i
                style={{ fontSize: "x-large" }}
                className="card-btn-icon far fa-heart"
              ></i>
            </button>
          )}
        </div>
        <div>
          <button
            className="increment-btn"
            disabled={loading || qty == 1}
            onClick={decrementItem}
          >
            -
          </button>
          <span>{` ${qty} `}</span>
          <button
            className="increment-btn"
            disabled={loading}
            onClick={incrementItem}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export { CartCard };
