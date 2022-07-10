import {
  SET_FILTER,
  SET_PRODUCTS,
  SET_FILTER_VALUES,
  CLEAR_FILTER_VALUES,
} from "../action-types/product";

let initialState = {
  products: [],
  filters: {
    company: ["All"],
    category: ["All"],
    color: ["All"],
    max_price: 1,
  },
  filter_values: {
    text: "",
    company: "All",
    category: "All",
    color: "All",
    min_price: 0,
    max_price: null,
    shipping: false,
  },
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    case SET_FILTER:
      return { ...state, filters: payload };
    case SET_FILTER_VALUES:
      return {
        ...state,
        filter_values: {
          ...state.filter_values,
          [payload.name]: payload.value,
        },
      };
    case CLEAR_FILTER_VALUES:
      return { ...state, filter_values: payload };

    default:
      return state;
  }
};
