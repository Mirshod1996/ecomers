import React from "react";
import "../../assets/styles/main.css";
import "./Categories.scss";

const CategoriesCard = ({ image, name }) => {
  return (
    <div className="categories-card-image">
      <img src={image} alt="" />
      <h4>{name}</h4>
      <h5>the most beautiful and comfortable equipment</h5>
    </div>
  );
};

export default CategoriesCard;
