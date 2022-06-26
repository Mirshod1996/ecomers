import { FILTER_PRODUCTS, CLEAR_FILTERS, UPDATE_FILTERS } from "../Actions";

const filter_reducer = (state, action) => {
  if ((action.type = FILTER_PRODUCTS)) {
    const { all_products } = state;
    const { text, company, category, shipping, color } = state.filters;
    let temProducts = [...all_products];
    if (text) {
      temProducts = temProducts.filter((product) =>
        product.name.toLowercase().startsWith(text)
      );
    }
    if (category !== "all") {
      temProducts = temProducts.filter(
        (product) => product.category === category
      );
    }
    if (company !== "all") {
      temProducts = temProducts.filter(
        (product) => product.company === company
      );
    }
    if (color !== "all") {
      temProducts = temProducts.filter((product) =>
        product.colors.find((c) => c === color)
      );
    }
    // temProducts = temProducts.filter((product) => product.price <= price);

    if (shipping) {
      temProducts = temProducts.filter((product) => product.shipping === true);
    }
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        // price:state.filters.max_price,
        shipping: true,
      },
    };
  }
  if (action.type === UPDATE_FILTERS) {
    const { value, name } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
};

export default filter_reducer;
