import { combineReducers, createStore, applyMiddleware } from "redux";
import { productReducer } from "./reducers/product-reducer";
import { homeReducer } from "./reducers/home-reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  productPage: productReducer,
  homeReducer: homeReducer,
});

const store = createStore(reducers, {}, applyMiddleware(thunk));
export default store;
