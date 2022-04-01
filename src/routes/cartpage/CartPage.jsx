import "./cartpage.css";
import { useCart } from "../../context/cart-context";
import { useProduct } from "../../context/product-context";
import { useUser } from "../../context/user-context";
import { CartCard, PriceDetail } from "../../components";

const CartPage = () => {
  const {
    state: { cartList },
  } = useCart();
  const { productList } = useProduct();
  const { encodedToken } = useUser();

  function check(it) {
    return cartList.some((item) => item._id === it._id);
  }

  const cartItems = productList.filter(check);

  let totalPrice = 0;
  cartItems.map((product) => {
    totalPrice +=
      Number(product.price) *
      Number(cartList.find((it) => it._id === product._id).qty);
  });

  let discount = Math.floor(totalPrice * 0.12);

  return (
    <div className="cartpage-container">
      {encodedToken ? (
        <h4 className="cartpage-count">Cart ({`${cartItems.length}`}items)</h4>
      ) : (
        <h4 className="cartpage-count">Sign in to view your cart items.</h4>
      )}

      <main className="cartpage-main">
        {cartItems.map((product) => {
          return (
            <CartCard
              key={product._id}
              price={product.price}
              title={product.title}
              image={product.image}
              includeStock={product.includeStock}
              _id={product._id}
              qty={cartList.find((it) => it._id === product._id).qty}
            />
          );
        })}
      </main>
      <PriceDetail
        className="cartpage-aside"
        totalPrice={totalPrice}
        discount={discount}
        items={cartItems.length}
      />
    </div>
  );
};
export { CartPage };
