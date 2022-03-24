import { useEffect, useState } from "react";
import comic from "../../assets/images/comic.png";

import "./carousel.css";
import axios from "axios";

export const Carousel = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`/api/categories`);
      setCategories(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-container">
        {categories.map(({id,categoryName,image}) => (
        //   <img className="carousel-img" src="../../assets/images/comic.png" key={id}/>
          <img className="carousel-img" src={image} key={id}/>
        ))}
      </div>
    </div>
  );
};