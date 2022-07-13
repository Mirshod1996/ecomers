import React from "react";
import CatalogProducts from "../../components/CatalogProducts/CatalogProducts";
import Contact from "../../components/Contact/Contact";
import { Navigate } from "../../components/Navigate/Navigate";
const Catalog = () => {
  return (
    <div>
      <Navigate title={"/catalog"} />
      <CatalogProducts />
      <Contact />
    </div>
  );
};

export default Catalog;
