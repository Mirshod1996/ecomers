import React from "react";
import "../../assets/styles/main.css";
import HomeCategories from "./HomeCategories/HomeCategories";
import Contact from "./Contact/Contact";
import PopularProducts from "./PopularProducts/PopularProducts";
import Product from "./Product/Product";
import Report from "./Report/Report";
import Service from "./Service/Service";
import Animation from "../animation";
import HomeAnimate from "./HomeAnimate/HomeAnimate";
import HomeCategoriesAnimation from "./HomeCategoriesAnimation/HomeCategoriesAnimation";

const Home = () => {
  return (
    <div>
      <Product />
      <Report />
      <Service />
      <HomeCategories />
      <PopularProducts />
      <Contact />
    </div>
  );
};

export default Home;
