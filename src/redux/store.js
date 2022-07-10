import { combineReducers, createStore, applyMiddleware } from "redux";
import { productReducer } from "./reducers/product-reducer";
import { cartReducer } from "./reducers/cart-reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  productPage: productReducer,
  cartPage: cartReducer,
});

const store = createStore(reducers, {}, applyMiddleware(thunk));
export default store;
