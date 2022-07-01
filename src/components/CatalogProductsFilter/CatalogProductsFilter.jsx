import React from "react";
import "./CatalogProductsFilter.scss";
import { useState } from "react";
import { useSelector } from "react-redux";

const CatalogProductsFilter = () => {
  const filters = useSelector((state) => state.productPage.filters);
  const [num, setNum] = useState(0);
  return (
    <div className="catalog-filteres">
      <div className="filter-input-text">
        <input
          type="text"
          className="input-text"
          name="text"
          placeholder="search"
          readOnly
        />
      </div>

      <div className="catalog-categories">
        <h4>Category</h4>
        <ul>
          {filters.category.map((item, index) => (
            <li key={index} className="ul-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="catalog-companies">
        <h4>Company</h4>
        <select name="company" id="">
          {filters.company.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
      <div className="catalog-colors">
        <h4>Colors</h4>
        <div className="colors">
          <span className="catalog-colors-All">All</span>
          {filters.color.map((item, index) => (
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
