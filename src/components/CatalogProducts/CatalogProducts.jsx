import React from "react";
import { useSelector } from "react-redux";
import CatalogProductsSort from "../CatalogProductsSort/CatalogProductsSort";
import CatalogProductsFilter from "../CatalogProductsFilter/CatalogProductsFilter";
import "./CatalogProducts.scss";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";

const CatalogProducts = () => {
  const [newData, setNewData] = useState([]);
  const filterValues = useSelector((state) => state.productPage.filter_values);
  const products = useSelector((state) => state.productPage.products);
  useEffect(() => {
    setNewData(
      products.filter((e) => {
        let exact = true;
        if (!e.name.includes(filterValues.text)) {
          exact = false;
        }
        if (
          e.category !== filterValues.category &&
          filterValues.category !== "All"
        ) {
          exact = false;
        }
        if (
          e.company !== filterValues.company &&
          filterValues.company !== "All"
        ) {
          exact = false;
        }
        if (
          !e.colors.includes(filterValues.color) &&
          filterValues.color !== "All"
        ) {
          exact = false;
        }
        if (filterValues.max_price && e.price / 100 > filterValues.max_price) {
          exact = false;
        }
        if (!e.shipping && filterValues.shipping) {
          exact = false;
        }
        return exact;
      })
    );
  }, [filterValues, products]);

  return (
    <div>
      <div className="container">
        <div className="catalog-products">
          <div className="filter-box">
            <CatalogProductsFilter />
          </div>
          <div className="catalog-sort-box">
            <CatalogProductsSort
              productsLength={newData.length}
              newData={[...newData]}
              setNewData={(data) => {
                setNewData(data);
              }}
            />
            {newData.length == 0 ? (
              <p>Sorry, no products matched your search.</p>
            ) : (
              <div className="catalog-products-box">
                {newData.map((item, index) => {
                  return <Card {...item} key={item.id + index} />;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogProducts;
