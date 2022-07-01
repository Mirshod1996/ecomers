import { SET_FILTER, SET_PRODUCTS } from "../action-types/action-types";

let initialState = {
  products: [],

  filters: {
    company: ["all"],
    category: ["all"],
    color: ["all"],
  },
  filter_values: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    shipping: false,
  },
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    case SET_FILTER:
      return { ...state, filters: payload };
    default:
      return state;
  }
};
