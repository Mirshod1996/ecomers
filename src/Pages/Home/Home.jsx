import React from "react";
import "../../assets/styles/main.css";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import Contact from "../../components/Contact/Contact";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import Product from "../../components/Product/Product";
import Report from "../../components/Report/Report";
import Service from "../../components/Service/Service";


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
