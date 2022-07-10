import React from "react";
import "./CatalogProductsFilter.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  setFilterValues,
  clearFilterValues,
} from "../../redux/action-creator/product";

const CatalogProductsFilter = () => {
  const filterValues = useSelector((state) => state.productPage.filter_values);
  const filters = useSelector((state) => state.productPage.filters);
  const dispatch = useDispatch();
  return (
    <div className="catalog-filteres">
      <div className="filter-input-text">
        <input
          type="text"
          className="input-text"
          name="text"
          placeholder="search"
          value={filterValues.text}
          onChange={(e) => {
            dispatch(setFilterValues("text", e.target.value));
          }}
        />
      </div>

      <div className="catalog-categories">
        <h4>Category</h4>
        <ul>
          {filters.category.map((item, index) => (
            <li
              key={index}
              className={`ul-item ${
                filterValues.category === item && "active"
              }`}
              onClick={() => {
                dispatch(setFilterValues("category", item));
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="catalog-companies">
        <h4>Company</h4>
        <select
          name="company"
          id=""
          value={filterValues.company}
          onChange={(e) => {
            dispatch(setFilterValues("company", e.target.value));
          }}
        >
          {filters.company.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
      <div className="catalog-colors">
        <h4>Colors</h4>
        <div className="colors">
          <span
            className="catalog-colors-All"
            onClick={() => {
              dispatch(setFilterValues("color", "All"));
            }}
          >
            All
          </span>
          {filters.color.map((item, index) => (
            <span
              key={index}
              name="color"
              className={`catalog-colors-item ${
                filterValues.color === item && "catalog-colors-item-active"
              }`}
              style={{ backgroundColor: item }}
              onClick={() => {
                dispatch(setFilterValues("color", item));
              }}
            >
              {filterValues.color === item && <i className="check icon"></i>}
            </span>
          ))}
        </div>
      </div>
      <div className="filter-input-range">
        <h4>Price</h4>
        <h5>${filterValues.max_price || filters.max_price / 100}</h5>
        <input
          type="range"
          name="price"
          min={0}
          max={filters.max_price / 100}
          step={0.01}
          value={filterValues.max_price || filters.max_price / 100}
          onChange={(e) =>
            dispatch(setFilterValues("max_price", e.target.value))
          }
        />
      </div>
      <div className="filter-input-checkbox">
        <h5 className="filter-input-checkbox-title">Free Shipping</h5>
        <input
          type="checkbox"
          name="shipping"
          checked={filterValues.shipping}
          onChange={(e) => {
            dispatch(setFilterValues("shipping", e.target.checked));
          }}
        />
      </div>
      <button
        className="btn"
        onClick={() => {
          dispatch(clearFilterValues());
        }}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default CatalogProductsFilter;
