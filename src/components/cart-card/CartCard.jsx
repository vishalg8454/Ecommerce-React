import "./cart-card.css";
import { useUser } from "../../context/user-context";
import { useCart } from "../../context/cart-context";
import {useWishlist} from "../../context/wishlist-context";
import axios from "axios";

const CartCard = ({ image, title, price, includeStock, _id, qty }) => {
  
  const { encodedToken } = useUser();
  const { dispatch } = useCart();
  const {wishlistList,setWishlistList} = useWishlist();


  const incrementItem = async () => {
    // dispatch({
    //   type: "INCREMENT_ITEM",
    //   payload: { dispatch, _id, encodedToken },
    // });
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
    } catch (error) {}
  };

  const decrementItem = async () => {
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
    } catch (error) {}
  };

  const removeItem = async ()=>{
    try {
      const cartData = await axios.delete(
        `/api/user/cart/${_id}`,
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      dispatch({ type: "SET_CART", payload: cartData.data.cart });
    } catch (error) {}
  };

  const addToWishList = async () => {
    try {
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
    }
  };

  const removeFromWishList = async () => {
    try {
      const wishlistData = await axios.delete(
        `/api/user/wishlist/${_id}`,
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      setWishlistList(wishlistData.data.wishlist);
    } catch (error) {
      showToast({ message: "Unable to remove items from wishlist", type: "failure" });
    }
  };
  

  return (
    <div className="card-container card-horizontal">
      <img className="cart-card-image" src={image} alt="Item Image" />
      <div className="cart-card-container">
        <h6 className="card-title">{title}</h6>
        <p className="card-description cart-card-price">{`₹${price}`}</p>
        <div class="cart-card-btn-container card-btn-container">
          <button className="card-btn card-btn-primary" onClick={removeItem}>Remove</button>
          <button className="card-btn card-btn-secondary">
            Save For Later
          </button>
          {wishlistList.some((item) => item._id === _id) ? (
          <i
            style={{ color: "red", fontSize: "x-large" }}
            onClick={() => removeFromWishList(_id)}
            className="card-btn-icon fas fa-heart"
          ></i>
        ) : (
          <i
            style={{ fontSize: "x-large" }}
            onClick={() => addToWishList(_id)}
            className="card-btn-icon far fa-heart"
          ></i>
        )}
        </div>
        <div>
          <button className="increment-btn" onClick={incrementItem}>+</button>
          <span>{` ${qty} `}</span>
          <button className="increment-btn" onClick={decrementItem}>-</button>
        </div>
      </div>
    </div>
  );
};

export { CartCard };
