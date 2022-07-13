import {
  ADD__PRODUCT__TO__CART,
  CHANGE__PRODUCT__CART,
  CLEAR__PRODUCT__CART,
  DELETE__PRODUCT__IN__CART,
  REMOVE__SINGLE__PRODUCT,
  SET__SINGLE__PRODUCT,
} from "../action-types/cart";

let initialState = {
  singleProduct: {},
  cartProducts: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET__SINGLE__PRODUCT:
      return { ...state, singleProduct: payload };
    case REMOVE__SINGLE__PRODUCT:
      return {
        ...state,
        singleProduct: [],
      };

    case ADD__PRODUCT__TO__CART:
      const { stock, color } = payload;
      const { id } = payload.product;
      const cartItem = state.cartProducts.find((i) => i.id === color + id);
      if (cartItem) {
        const updateCartItem = state.cartProducts.map((item) => {
          if (item.id === color + id) {
            let newStock = item.stock + stock;
            if (newStock > item.max) {
              newStock = item.max;
            }
            return {
              ...item,
              stock: newStock,
            };
          } else {
            return item;
          }
        });
        return {
          ...state,
          cartProducts: updateCartItem,
        };
      } else {
        return {
          ...state,
          cartProducts: [
            ...state.cartProducts,
            {
              color: payload.color,
              price: payload.product.price,
              stock: payload.stock,
              max: payload.product.stock,
              id: payload.color + payload.product.id,
              image: payload.product.images[0].url,
              name: payload.product.name,
            },
          ],
        };
      }
    case CHANGE__PRODUCT__CART:
      const newCartItem = state.cartProducts.map((item) => {
        if (item.id === payload.id) {
          item.stock = payload.stock;
        }
        return {
          ...item,
          stock: payload.stock,
        };
      });
      return {
        ...state,
        cartProducts: newCartItem,
      };
    case DELETE__PRODUCT__IN__CART:
      const updateProductCart = state.cartProducts.filter((elem) => {
        return elem.id !== payload;
      });
      return {
        ...state,
        cartProducts: updateProductCart,
      };
    case CLEAR__PRODUCT__CART:
      return {
        ...state,
        cartProducts: [],
      };
    default:
      return state;
  }
};
