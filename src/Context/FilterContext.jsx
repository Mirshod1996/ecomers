import { createContext, useEffect } from "react";
import { useReducer } from "react";
import { CLEAR_FILTERS, FILTER_PRODUCTS, UPDATE_FILTERS } from "../Actions";
import reducer from "../Reducers/filter_reducer";

const initialstate = {
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    shipping: false,
  },
};
export const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
  }, [state.filters]);

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.textContext;
    }
    if (name === "color") {
      value = e.target.dataset.color;
    }
    if (name === "shipping") {
      value = e.target.checked;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };
  return (
    <div>
      <FilterContext.Provider value={{ updateFilters, clearFilters }}>
        {children}
      </FilterContext.Provider>
    </div>
  );
};

export { FilterContextProvider };
