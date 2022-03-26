import "./product-card.css";

const ProductCard = (props) => {
  return (
    <div class="card-container">
      <img
        class="card-image"
        src={props.image}
        alt="Item Image"
      />
      <h6 class="card-title">{props.title}</h6>
      <p class="card-description card-price">₹ {props.price}</p>
      <div class="card-btn-container">
        <button class="card-btn card-btn-primary">Add to Cart</button>
        <button class="card-btn card-btn-secondary">Save For Later</button>
        <i class="card-btn-icon far fa-heart"></i>
      </div>
      <div class="card-badge">-22%</div>
    </div>
  );
};

export {ProductCard};