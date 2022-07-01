import React from "react";
import { useSelector } from "react-redux";
import CatalogProductsSort from "../CatalogProductsSort/CatalogProductsSort";
import CatalogProductsCard from "../CatalogProductsCard/CatalogProductsCard";
import CatalogProductsFilter from "../CatalogProductsFilter/CatalogProductsFilter";
import "./CatalogProducts.scss";

const CatalogProducts = () => {
  const products = useSelector((state) => state.productPage.products);
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
              {products.map((item) => (
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
