import {
  ADD__PRODUCT__TO__CART,
  REMOVE__SINGLE__PRODUCT,
  SET__SINGLE__PRODUCT,
} from "../action-types/cart";
import { single_product_url as Url } from "../../Utils/constants";

export const setSingleProduct = (product) => {
  return {
    type: SET__SINGLE__PRODUCT,
    payload: product,
  };
};

export const removeSingleProduct = () => {
  return {
    type: REMOVE__SINGLE__PRODUCT,
  };
};

export const addProductToCard = (color, stock) => {
  return {
    type: ADD__PRODUCT__TO__CART,
    payload: { color, stock },
  };
};

// ***THUNK//

export const getSingleProduct = (id) => {
  return async (dispatch) => {
    const respons = await fetch(`${Url}${id}`);
    const data = await respons.json();
    dispatch(setSingleProduct(data));
  };
};
