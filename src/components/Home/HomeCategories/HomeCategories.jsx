import React from "react";
import "./HomeCategories.scss";
import "../../../assets/styles/main.css";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const HomeCategories = () => {
  return (
    <div className="categories">
      <div className="container">
        <div className="categories-box">
          <h1>Categories</h1>
          <div className="categry-box">
            <ProductCard
              img={
                "https://dl.airtable.com/.attachmentThumbnails/0be1af59cf889899b5c9abb1e4db38a4/d631ac52?ts=1655552451&userId=usrQMwWEPx18KgLcP&cs=dc9d527d5a18f27a"
              }
              title={"albany sectional"}
              description={
                "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf."
              }
            />
            <ProductCard
              img={
                "https://dl.airtable.com/.attachmentThumbnails/7478483f40a2f56662a87b304bd4e104/707d397f?ts=1655552451&userId=usrQMwWEPx18KgLcP&cs=10f3b0f31bb40014"
              }
              title={"albany table"}
              description={
                "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. "
              }
            />
            <ProductCard
              img={
                "https://dl.airtable.com/.attachmentThumbnails/530c07c5ade5acd9934c8dd334458b86/cf91397f?ts=1655552451&userId=usrQMwWEPx18KgLcP&cs=96c55d73f201fb82"
              }
              title={"armchair"}
              description={
                "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. "
              }
            />
            <ProductCard
              img={
                "https://dl.airtable.com/.attachmentThumbnails/a6119fabf7256049cc0e8dbcdf536c9c/b0153f66?ts=1655552451&userId=usrQMwWEPx18KgLcP&cs=752bdfde5be81031"
              }
              title={"bar stool"}
              description={
                "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. "
              }
            />
          </div>
          <Link to="/categories">
            {" "}
            <span className="btn">All categories</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCategories;
