import React, { createContext, useEffect, useState, useReducer } from "react";
import { GET_DATA } from "../Actions";
import { products_url as Url } from "../Utils/constants";

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return (state = action.payload);

    default:
      return state;
  }
};

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [furnituries, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    fetch(Url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: GET_DATA, payload: data });
        setProducts(data);
      })
      .catch((err) => {
        dispatch({ type: "FAILED_DATA", payload: `Error` });
      });
  }, []);

  return (
    <div>
      <Context.Provider
        value={{
          furnituries,
          products,
        }}
      >
        {children}
      </Context.Provider>
    </div>
  );
};

export { ContextProvider };
