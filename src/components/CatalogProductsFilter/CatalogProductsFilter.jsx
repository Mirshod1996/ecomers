import React from "react";
import { useContext } from "react";
import "./CatalogProductsFilter.scss";
import { useState } from "react";
import { Context } from "../../Context/Context";
import { FilterContext } from "../../Context/FilterContext";

const CatalogProductsFilter = () => {
  const { products } = useContext(Context);
  // const {
  //   filters: {
  //     text,
  //     category,
  //     company,
  //     color,
  //     min_price,
  //     price,
  //     max_price,
  //     shipping,
  //   },
  //   updateFilters,
  // } = useContext(FilterContext);

  const [text, setTExt] = useState("");
  const [num, setNum] = useState(0);

  const lastCategories = products.map((item) => item.category);
  const categories = new Set(lastCategories);
  const newCategories = ["All", ...categories];

  const lastCompanies = products.map((item) => item.company);
  const companies = new Set(lastCompanies);
  const newCompanies = ["all", ...companies];

  const lastColors = products.map((item) => item.colors);
  const newArr = [];
  for (let subArr of lastColors) {
    for (let elem of subArr) {
      newArr.push(elem);
    }
  }
  const colors = new Set(newArr);
  const newColors = [...colors];

  return (
    <div className="catalog-filteres">
      <div className="filter-input-text">
        <input
          type="text"
          className="input-text"
          name="text"
          value={text}
          placeholder="search"
        />
      </div>

      <div className="catalog-categories">
        <h4>Category</h4>
        <ul>
          {newCategories.map((item, index) => (
            <li key={index} className="ul-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="catalog-companies">
        <h4>Company</h4>
        <select name="company" id="">
          {newCompanies.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
      <div className="catalog-colors">
        <h4>Colors</h4>
        <div className="colors">
          <span className="catalog-colors-All">All</span>
          {newColors.map((item, index) => (
            <span
              key={index}
              name="color"
              className="catalog-colors-item "
              style={{ backgroundColor: item }}
            >
              <i className="check icon"></i>
            </span>
          ))}
        </div>
      </div>
      <div className="filter-input-range">
        <h4>Price</h4>
        <h5>${num}</h5>
        <input
          type="range"
          name="price"
          min={0}
          max={3099.99}
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
      </div>
      <div className="filter-input-checkbox">
        <h5 className="filter-input-checkbox-title">Free Shipping</h5>
        <input type="checkbox" name="shipping" />
      </div>
      <button className="btn">Clear Filters</button>
    </div>
  );
};

export default CatalogProductsFilter;
