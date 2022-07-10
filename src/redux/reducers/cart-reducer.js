import {
  ADD__PRODUCT__TO__CART,
  REMOVE__SINGLE__PRODUCT,
  SET__SINGLE__PRODUCT,
} from "../action-types/cart";

let initialState = {
  singleProduct: {},
  cartProduct: {
    id: 0,
    image: "",
    color: "",
    stock: "",
  },
  cartProducts: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET__SINGLE__PRODUCT:
      return { ...state, singleProduct: payload };
    case REMOVE__SINGLE__PRODUCT:
      return {
        ...state,
        singleProduct: {},
      };

    case ADD__PRODUCT__TO__CART:
      return {
        ...state,
        cartProduct: payload,
        // [state.cartProduct.color]: payload.color,
        // [state.cartProduct.stock]: payload.stock,
      };
    default:
      return state;
  }
};

//  const { id, color } = payload;
//  const tempItem = state.singleProduct.find(
//    (i) => i.id === id && i.color === color
//  );
