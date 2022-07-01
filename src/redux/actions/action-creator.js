import { SET_PRODUCTS, SET_FILTER } from "../action-types/action-types";
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

export const getProducts = () => {
  return async (dispatch) => {
    const res = await fetch(Url);
    const data = await res.json();
    dispatch(setProducts(data));
    dispatch(setFilter(getFilterValues(data)));
  };
};

const getFilterValues = (products) => {
  let lastCategories = [];
  let lastCompanies = [];
  let lastColors = [];

  products.forEach((element) => {
    lastCategories.push(element.category);
    lastCompanies.push(element.company);
    lastColors.push(element.colors);
  });

  const newCategories = ["All", ...new Set(lastCategories)];

  const newCompanies = ["all", ...new Set(lastCompanies)];

  const newArr = [];
  for (let subArr of lastColors) {
    for (let elem of subArr) {
      newArr.push(elem);
    }
  }
  const newColors = [...new Set(newArr)];
  return { company: newCompanies, category: newCategories, color: newColors };
};
