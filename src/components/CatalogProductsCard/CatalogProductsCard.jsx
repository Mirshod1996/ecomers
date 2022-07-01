import React from "react";
import "antd/dist/antd.css";
import "../../assets/styles/main.css";
import { Image } from "antd";

const CatalogProductsCard = ({ image, name, category, price, shipping }) => {
  return (
    <div>
      <div className="product-card">
        <Image src={image} className="product-card-image" />
        <div className="card-main">
          <h3>{name}</h3>
          <h4>{category}</h4>
          <div className="card-title">
            <div className="input-box">
              <input
                type="checkbox"
                onChange={(e) => console.log(e.target.value)}
                checked={shipping ? "completed" : ""}
              />
              <p>{shipping ? "In stock" : "Out of stock"}</p>
            </div>
            <span>SALE</span>
          </div>
          <div className="price">
            <h3 className="card-price">{price} $</h3>
            <h4 className="last-price">{Math.floor(price * 1.1)} $</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogProductsCard;
