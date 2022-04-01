import "./cart-card.css";
import { useUser } from "../../context/user-context";
import { useCart } from "../../context/cart-context";
import axios from "axios";

const CartCard = ({ image, title, price, includeStock, _id, qty }) => {
  console.log(qty);
  const { encodedToken } = useUser();
  const { dispatch } = useCart();

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
          <i className="card-btn-icon far fa-heart"></i>
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
