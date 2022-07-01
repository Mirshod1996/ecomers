import { useState } from "react";
import "./PopularProducts.scss";
import "../../assets/styles/main.css";
import "antd/dist/antd.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import PopularProductsCard from "./PopularProductsCard";
import { useSelector } from "react-redux";

const PopularProducts = () => {
  const products = useSelector((state) => state.productPage.products);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(3);
  const increment = () => {
    if (num1 !== products.length - 2) {
      setNum1(num1 + 3);
      setNum2(num2 + 3);
    } else {
      setNum1(0);
      setNum2(3);
    }
  };
  const decrement = () => {
    if (num1 !== 0) {
      setNum1(num1 - 3);
      setNum2(num2 - 3);
    }
  };

  return (
    <div className="container">
      <div className="products-title">
        <h1>Our popular products</h1>
        <div className="products-icons">
          <LeftOutlined className="products-icon" onClick={decrement} />
          <RightOutlined className="products-icon" onClick={increment} />
        </div>
      </div>
      <div className="products-row">
        {products.slice(num1, num2).map((item) => (
          <PopularProductsCard {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
