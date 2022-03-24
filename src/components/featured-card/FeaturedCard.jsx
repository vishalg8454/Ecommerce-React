import "./featured-card.css";

export const FeaturedCard = (props) => {
  return (
    <div className="card-container card-horizontal">
      <img className="card-image" src={props.image} alt="Item Image" />
      <div className="card-container">
        <h6 className="card-title">{props.title}</h6>
        <p className="card-description">{props.description}
        </p>
        <div className="card-btn-container">
          <button className="card-btn card-btn-primary">Explore</button>
        </div>
      </div>
    </div>
  );
};
