import { useEffect, useState } from "react";
import { useFilter } from "../../context/filter-context";
import { Link } from "react-router-dom";

import "./carousel.css";
import axios from "axios";

export const Carousel = () => {
  const [categories, setCategories] = useState([]);
  const { dispatch } = useFilter();

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`/api/categories`);
      setCategories(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  const setCategory = (categoryName) => {
    dispatch({ type: "RESET" });
    if (categoryName === "fiction") {
      dispatch({ type: "SELECT_FICTION" });
    }
    if (categoryName === "comic") {
      dispatch({ type: "SELECT_COMIC" });
    }
    if (categoryName === "self-help") {
      dispatch({ type: "SELECT_SELFHELP" });
    }
    if (categoryName === "sci-fi") {
      dispatch({ type: "SELECT_SCIFI" });
    }
    if (categoryName === "biography") {
      dispatch({ type: "SELECT_BIOGRAPHY" });
    }
    if (categoryName === "novel") {
      dispatch({ type: "SELECT_NOVEL" });
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-container">
        {categories.map(({ id, categoryName, image }) => (
          <Link key={id} to="/shop">
            <img
              className="carousel-img"
              onClick={() => setCategory(categoryName)}
              src={image}
              key={id}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
