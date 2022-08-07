import "./orders.css";
// import { useUser } from "../../context/user-context";
import { useUser } from "../../context";

const Order = ({ orderId, amount }) => {
  return (
    <div className="order-container">
      <div className="order-flex">
        <p className="order-bold">Order Id: </p>
        <p>{` ${orderId}`}</p>
      </div>
      <div className="order-flex">
        <p className="order-bold">{`Total Amount: `}</p>
        <p>{amount}</p>
      </div>
    </div>
  );
};

export const Orders = () => {
  const { orders } = useUser();
  return (
    <main>
      {orders.length === 0 && (
        <p className="empty-order">You do not have any orders.</p>
      )}
      {orders.map(({ orderId, totalAmount }) => (
        <Order key={orderId} orderId={orderId} amount={totalAmount} />
      ))}
    </main>
  );
};
