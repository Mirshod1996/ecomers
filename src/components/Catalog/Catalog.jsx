import React from "react";
import CatalogProducts from "./CatalogProducts/CatalogProducts";
import Contact from "../Home/Contact/Contact";
import CatalogRecommended from "./Catalog/CatalogRecommended";
const Catalog = () => {
  return (
    <div>
      <CatalogProducts />
      <CatalogRecommended />
      <Contact />
    </div>
  );
};

export default Catalog;
