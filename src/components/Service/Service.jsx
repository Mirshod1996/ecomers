import React from "react";
import "../../assets/styles/main.css";
import Icon from "../../assets/images/product-return 1.png";
import IconLike from "../../assets/images/evaluate 1.png";
import "./Service.scss";

const Service = () => {
  return (
    <div className="container">
      <div className="service">
        <h1>Why Golden Service?</h1>
        <div className="box">
          <div className="card">
            <img src={Icon} alt="" />
            <h5>
              Refund of double the cost of each furniture in case of marriage.
            </h5>
          </div>
          <div className="card">
            <img src={IconLike} alt="" />
            <h5>
              Refund of double the cost of each furniture in case of marriage.
            </h5>
          </div>
          <div className="card">
            <img src={Icon} alt="" />
            <h5>
              Refund of double the cost of each furniture in case of marriage.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
