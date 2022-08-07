import "./price-detail.css";
// import { useToast } from "../../context/toast-context";
// import { useCart } from "../../context/cart-context";
// import {useUser} from "../../context/user-context";
import { useToast, useCart, useUser } from "../../context";

const PriceDetail = ({ totalPrice, discount, items }) => {
  const { showToast } = useToast();
  const { resetCart } = useCart();
  const { addOrder } = useUser();
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const paymentHandler = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    const options = {
      key: "rzp_test_idT4IAnGwuB9x8",
      currency: "INR",
      amount: amount * 100,
      name: "BookStalk",
      description: "Thanks for shopping with us!",
      prefill: {
        name: "Test User",
        email: "testuser@example.com",
        contact: "0123456789",
      },
      handler: function (response) {
        showToast({
          message: `Order placed successfully.`,
          type: "success",
        });
        resetCart();
        addOrder(response.razorpay_payment_id, amount);
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <aside className="aside">
      <div className="text-md border-bottom">Price Details</div>
      <div className="text-space-bw text-sm">
        <span>Price ({`${items}`} items)</span>
        <span>{`₹${totalPrice}`}</span>
      </div>
      <div className="text-space-bw text-sm">
        <span>Discount</span>
        <span>{`-₹${discount}`}</span>
      </div>
      <div className="text-space-bw text-sm">
        <span>Delivery Charges</span>
        <span>₹100</span>
      </div>
      <div className="text-space-bw text-md">
        <span>Total Amount</span>
        <span>{`₹${totalPrice - discount}`}</span>
      </div>
      <div className="text-sm">
        You will save ₹{`${discount}`} on this order
      </div>
      <button
        className="btn-order btn btn-primary-solid"
        onClick={() => paymentHandler(totalPrice - discount)}
      >
        PLACE ORDER
      </button>
    </aside>
  );
};

export { PriceDetail };
