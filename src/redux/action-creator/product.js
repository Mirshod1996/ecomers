import {
  SET_PRODUCTS,
  SET_FILTER,
  SET_FILTER_VALUES,
  CLEAR_FILTER_VALUES,
} from "../action-types/product";
import { products_url as Url } from "../../Utils/constants";

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};

export const setFilterValues = (name, value) => {
  return {
    type: SET_FILTER_VALUES,
    payload: { name, value },
  };
};
export const clearFilterValues = () => {
  return {
    type: CLEAR_FILTER_VALUES,
    payload: {
      text: "",
      company: "All",
      category: "All",
      color: "All",
      min_price: 0,
      max_price: null,
      shipping: false,
    },
  };
};

/** THUNKS */

export const getProducts = () => {
  return async (dispatch) => {
    const respons = await fetch(Url);
    const data = await respons.json();
    dispatch(setProducts(data));
    const values = getFilterValues(data);
    dispatch(setFilter(values));
  };
};

const getFilterValues = (products) => {
  let lastCategories = [];
  let lastCompanies = [];
  let lastColors = [];
  let max_price = 0;

  products.forEach((element) => {
    lastCategories.push(element.category);
    lastCompanies.push(element.company);
    lastColors.push(element.colors);
    if (max_price < element.price) {
      max_price = element.price;
    }
  });

  const newCompanies = ["All", ...new Set(lastCompanies)];

  const newCategories = ["All", ...new Set(lastCategories)];

  const newArr = [];
  for (let subArr of lastColors) {
    for (let elem of subArr) {
      newArr.push(elem);
    }
  }
  const newColors = [...new Set(newArr)];

  return {
    company: newCompanies,
    category: newCategories,
    color: newColors,
    max_price: max_price,
  };
};
