import "./product-card.css";
import { useUser } from "../../context/user-context";
import { useCart } from "../../context/cart-context";
import { useToast } from "../../context/toast-context";
import { useWishlist } from "../../context/wishlist-context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ image, title, price, includeStock, _id }) => {
  const { encodedToken } = useUser();
  const { showToast } = useToast();
  const { wishlistList, setWishlistList } = useWishlist();
  let navigate = useNavigate();
  const {
    state: { cartList },
    dispatch,
  } = useCart();

  const addToCart = async () => {
    try {
      const cartData = await axios.post(
        "/api/user/cart",
        {
          product: { _id },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );
      dispatch({ type: "SET_CART", payload: cartData.data.cart });
    } catch (error) {
      showToast({ message: "Sign in to add items to cart", type: "failure" });
    }
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

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <div
      className="card-container product-card-container"
      style={includeStock ? { opacity: 1 } : { opacity: 0.2 }}
    >
      <img
        className="card-image product-card-img"
        src={image}
        alt="Item Image"
      />
      <h6 className="card-title">{title}</h6>
      <p className="card-description card-price">??? {price}</p>
      <div className="card-btn-container">
        {cartList.some((item) => item._id === _id) ? (
          <button className="card-btn card-btn-primary" onClick={goToCart}>
            Go to Cart
          </button>
        ) : (
          <button className="card-btn card-btn-primary" onClick={addToCart}>
            Add to Cart
          </button>
        )}
        <button className="card-btn card-btn-secondary">Save For Later</button>
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
      <div className="card-badge">-22%</div>
    </div>
  );
};

export { ProductCard };
