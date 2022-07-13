import React from "react";
import "./Navigate.scss";
import { Link } from "react-router-dom";

export const Navigate = ({ title, product }) => {
  return (
    <div className="navigate">
      <div className="container">
        <div className="navigate__box">
          <Link to="/">Home</Link>

          {product ? (
            <div className="to">
              <Link to="/catalog">{"/Catalog "}</Link>
              <h2>/{product}</h2>
            </div>
          ) : (
            <p>{title.slice(0, 2).toUpperCase() + title.slice(2)}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigate;
