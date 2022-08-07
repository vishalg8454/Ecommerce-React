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

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, sortBy: action.type };
    case "HIGH_TO_LOW":
      return { ...state, sortBy: action.type };
    case "INCLUDE_OUT_OF_STOCK":
      return { ...state, includeOutOfStock: !state.includeOutOfStock };
    case "SELECT_FICTION":
      return { ...state, fiction: !state.fiction };
    case "SELECT_SCIFI":
      return { ...state, scifi: !state.scifi };
    case "SELECT_NOVEL":
      return { ...state, novel: !state.novel };
    case "SELECT_SELFHELP":
      return { ...state, selfhelp: !state.selfhelp };
    case "SELECT_BIOGRAPHY":
      return { ...state, biography: !state.biography };
    case "SELECT_COMIC":
      return { ...state, comic: !state.comic };
    case "RESET":
      return { ...initialState };
    case "SET_RATING":
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};
