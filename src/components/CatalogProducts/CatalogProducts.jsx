import React from "react";
import { useContext } from "react";

import CatalogProductsSort from "../CatalogProductsSort/CatalogProductsSort";
import CatalogProductsCard from "../CatalogProductsCard/CatalogProductsCard";
import CatalogProductsFilter from "../CatalogProductsFilter/CatalogProductsFilter";
import "./CatalogProducts.scss";
import { Context } from "../../Context/Context";

const CatalogProducts = () => {
  const { furnituries } = useContext(Context);
  return (
    <div>
      <div className="container">
        <div className="catalog-products">
          <div className="filter-box">
            <CatalogProductsFilter />
          </div>
          <div className="catalog-sort-box">
            <CatalogProductsSort />
            <div className="catalog-products-box">
              {furnituries.map((item) => (
                <CatalogProductsCard {...item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogProducts;
