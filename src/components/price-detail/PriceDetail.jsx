import "./price-detail.css"

const PriceDetail = ({totalPrice,discount,items}) => {

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
        <span>{`₹${totalPrice-discount}`}</span>
      </div>
      <div className="text-sm">You will save ₹{`${discount}`} on this order</div>
      <button className="btn-order btn btn-primary-solid">PLACE ORDER</button>
    </aside>
  );
};

export {PriceDetail};
