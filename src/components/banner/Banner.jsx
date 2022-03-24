import "./banner.css";
// import banner from "./"
import banner from "../../assets/images/banner.jpeg";

export const Banner = () => {
  return (
    <div className="banner">
      <img className="banner-hero" src={banner} />
      <div className="banner-overlay"></div>
    </div>
  );
};
