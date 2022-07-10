import React from "react";
import "antd/dist/antd.css";
import "../../assets/styles/main.css";
import { Image } from "antd";
import { Link } from "react-router-dom";

const CatalogProductsCard = ({
  image,
  name,
  category,
  price,
  shipping,
  id,
}) => {
  return (
    <div>
      <div className="product-card">
        <Image src={image} className="product-card-image" />
        <Link to={`/catalog/${id}`}>
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
              <h3 className="card-price">{price / 100} $</h3>
              <h4 className="last-price">{Math.floor(price * 1.1) / 100} $</h4>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CatalogProductsCard;
