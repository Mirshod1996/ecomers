import React from "react";
import Carusel from "../Carusel/Carusel";
import "./Product.scss";
import "../../assets/styles/main.css";

const Product = () => {
  return (
    <div className="container">
      <div className="product">
        <div className="carusel">
          <Carusel />
        </div>
        <div className="main-item">
          <h1>accent chair</h1>
          <h5>
            Cloud bread VHS hell of banjo bicycle rights jianbing umami
            mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher
            waistcoat, authentic chillwave trust fund. Viral typewriter
            fingerstache pinterest pork belly narwhal.
          </h5>
          <div className="price">
            <h4>price:</h4>
            <h2> 25.999 $</h2>
          </div>
          <span className="btn">Buy now</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
