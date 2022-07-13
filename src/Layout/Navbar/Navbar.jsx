import React from "react";
import Logo from "../../assets/images/LogoTop.png";
import "./Navbar.scss";
import "../../assets/styles/main.css";
import { Link, NavLink } from "react-router-dom";
import { Badge } from "antd";
import { useSelector } from "react-redux";
import { PhoneOutlined, HeartOutlined } from "@ant-design/icons";

const Navbar = () => {
  const setActive = ({ isActive }) => (isActive ? "active" : "");

  const allProductsStok = useSelector((state) => state.cartPage.cartProducts);

  const stock = allProductsStok.map((el) => {
    return el.stock;
  });
  let result = 0;
  for (let i = 0; i <= stock.length - 1; i++) {
    result += stock[i];
  }

  return (
    <div className="nav">
      <div className="container">
        <div className="row">
          <NavLink to="/">
            <img src={Logo} alt="" />
          </NavLink>
          <ul>
            <li>
              <NavLink to="/" className="link">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/categories" className={(setActive, "link")}>
                {" "}
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog" className="link">
                {" "}
                Catalog
              </NavLink>
            </li>
            <li>About us</li>
          </ul>
          <div className="row">
            <p>
              <PhoneOutlined /> +7 (966) 55 88 499
            </p>
            <div className="icons">
              <div className="icon">
                <HeartOutlined className="icon" />
              </div>

              <div className="icon">
                <Link to="/cart">
                  {" "}
                  <Badge count={result}>
                    <i className="cart arrow down icon"></i>
                  </Badge>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
