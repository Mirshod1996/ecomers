import {
  ADD__PRODUCT__TO__CART,
  REMOVE__SINGLE__PRODUCT,
  SET__SINGLE__PRODUCT,
  DELETE__PRODUCT__IN__CART,
  CLEAR__PRODUCT__CART,
  CHANGE__PRODUCT__CART,
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

export const addProductToCart = (color, stock, product) => {
  return {
    type: ADD__PRODUCT__TO__CART,
    payload: { color, stock, product },
  };
};
export const changeProductCart = (stock, id) => {
  return {
    type: CHANGE__PRODUCT__CART,
    payload: { stock, id },
  };
};
export const deleteProductInCart = (id) => {
  return {
    type: DELETE__PRODUCT__IN__CART,
    payload: id,
  };
};

export const clearProductCart = () => {
  return {
    type: CLEAR__PRODUCT__CART,
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
