import React from "react";
import "antd/dist/antd.css";
import "../../assets/styles/main.css";
import { Card } from "antd";
const { Meta } = Card;

const ProductCard = ({ img, title, description }) => (
  <Card
    hoverable
    className="card-parent"
    cover={<img alt="example" src={img} className="cover-image " />}
  >
    <Meta title={title} description={description} />
  </Card>
);

export default ProductCard;
