import { useState } from "react";
import "./PopularProducts.scss";
import "../../assets/styles/main.css";
import "antd/dist/antd.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import PopularProductsCard from "./PopularProductsCard";
import { useContext } from "react";
import { Context } from "../../Context/Context";

const PopularProducts = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(3);
  const increment = () => {
    if (num1 !== 21) {
      setNum1(num1 + 3);
      setNum2(num2 + 3);
    } else {
      setNum1(0);
    }
  };
  const decrement = () => {
    if (num1 !== 0) {
      setNum1(num1 - 3);
      setNum2(num2 - 3);
    }
  };
  const { furnituries } = useContext(Context);
  const newData = furnituries.slice(num1, num2);
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
        {newData.map((item) => (
          <PopularProductsCard {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
