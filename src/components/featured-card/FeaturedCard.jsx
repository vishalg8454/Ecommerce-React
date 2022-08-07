import "./featured-card.css";
import {useNavigate} from "react-router-dom";

export const FeaturedCard = (props) => {
  let navigate = useNavigate();
  const navigateToShop=()=>{
    navigate("/shop");
  }
  return (
    <div className="featured-card-container card-container card-horizontal">
      <img className="card-img featured-card-img" src={props.image} alt="Item Image" />
      <div className="card-container">
        <h6 className="card-title">{props.title}</h6>
        <p className="card-description">{props.description}
        </p>
        <div className="card-btn-container">
          <button className="card-btn card-btn-primary" onClick={navigateToShop}></button>
        </div>
      </div>
    </div>
  );
};
