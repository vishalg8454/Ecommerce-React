import "./product-card.css";

const ProductCard = (props) => {
  console.log(props.includeStock)
  return (
    <div
      className="card-container product-card-container"
      style={props.includeStock ? { opacity: 1 } : { opacity: 0.2 }}
    >
      <img className="card-image product-card-img" src={props.image} alt="Item Image" />
      <h6 className="card-title">{props.title}</h6>
      <p className="card-description card-price">₹ {props.price}</p>
      <div className="card-btn-container">
        <button className="card-btn card-btn-primary" >Add to Cart</button>
        <button className="card-btn card-btn-secondary">Save For Later</button>
        <i className="card-btn-icon far fa-heart"></i>
      </div>
      <div className="card-badge">-22%</div>
    </div>
  );
};

export { ProductCard };
