import { useContext, createContext, useReducer } from "react";
import { filterReducer } from "../reducer/filter-reducer";

const FilterContext = createContext(null);

const useFilter = () => useContext(FilterContext);

const initialState = {
  sortBy: "",
  includeOutOfStock: false,
  fiction: false,
  scifi: false,
  novel: false,
  selfhelp: false,
  biography: false,
  comic: false,
  rating: 0,
};

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
export { useFilter, FilterProvider };
