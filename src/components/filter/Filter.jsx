import "./filter.css";

const Filter = ({ state, dispatch }) => {
  console.log(state);
  return (
    <aside className="filter">
      <p className="filter-label">Filters</p>

      <ul className="category-list">
        <li className="category-list-item">
          <input
            type="checkbox"
            name="category"
            checked={state.includeOutOfStock}
            onChange={() => dispatch({ type: "INCLUDE_OUT_OF_STOCK" })}
          />
          <label htmlFor="fiction"> Include out of stock</label>
          <br />
        </li>
      </ul>

      <p className="filter-label">Category</p>
      <ul className="category-list">
        <li className="category-list-item">
          <input
            type="checkbox"
            name="category"
            checked={state.fiction}
            onChange={() => dispatch({ type: "SELECT_FICTION" })}
          />
          <label htmlFor="fiction"> Fiction</label>
          <br />
        </li>
        <li className="category-list-item">
          <input
            type="checkbox"
            name="category"
            checked={state.scifi}
            onChange={() => dispatch({ type: "SELECT_SCIFI" })}
          />
          <label htmlFor="scifi"> Sci-Fi</label>
          <br />
        </li>
        <li className="category-list-item">
          <input
            type="checkbox"
            name="category"
            checked={state.novel}
            onChange={() => dispatch({ type: "SELECT_NOVEL" })}
          />
          <label htmlFor="novel"> Novel</label>
          <br />
        </li>
        <li className="category-list-item">
          <input
            type="checkbox"
            name="category"
            checked={state.selfhelp}
            onChange={() => dispatch({ type: "SELECT_SELFHELP" })}
          />
          <label htmlFor="selfhelp"> Self-Help</label>
          <br />
        </li>
        <li className="category-list-item">
          <input
            type="checkbox"
            name="category"
            checked={state.biography}
            onChange={() => dispatch({ type: "SELECT_BIOGRAPHY" })}
          />
          <label htmlFor="biography"> Biography</label>
          <br />
        </li>
        <li className="category-list-item">
          <input
            type="checkbox"
            name="category"
            checked={state.comic}
            onChange={() => dispatch({ type: "SELECT_COMIC" })}
          />
          <label htmlFor="comic"> Comic</label>
          <br />
        </li>
      </ul>
      <p className="filter-label">Rating</p>
      <ul className="category-list">
        <li className="category-list-item">
          <input type="radio" id="4star" name="rating" value="4" />
          <label htmlFor="4star">{" 4 Stars & above"}</label>
        </li>
        <li className="category-list-item">
          <input type="radio" id="4star" name="rating" value="3" />
          <label htmlFor="3star">{" 3 Stars & above"}</label>
        </li>
        <li className="category-list-item">
          <input type="radio" id="4star" name="rating" value="2" />
          <label htmlFor="2star">{" 2 Stars & above"}</label>
        </li>
        <li className="category-list-item">
          <input type="radio" id="4star" name="rating" value="1" />
          <label htmlFor="1star">{" 1 Stars & above"}</label>
        </li>
      </ul>
      <p className="filter-label">Sort by</p>
      <ul className="category-list">
        <li className="category-list-item">
          <input
            type="radio"
            id="low"
            name="sort"
            checked={state.sortBy === "LOW_TO_HIGH"}
            onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
          />
          <label htmlFor="low">{" Price - Low to High"}</label>
        </li>
        <li className="category-list-item">
          <input
            type="radio"
            id="high"
            name="sort"
            checked={state.sortBy === "HIGH_TO_LOW"}
            onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
          />
          <label htmlFor="high">{" Price - High to Low"}</label>
        </li>
      </ul>
    </aside>
  );
};
export { Filter };
