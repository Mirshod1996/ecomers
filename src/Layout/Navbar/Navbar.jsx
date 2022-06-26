import React from "react";
import Logo from "../../assets/images/LogoTop.png";
import "./Navbar.scss";
import "../../assets/styles/main.css";
import { NavLink } from "react-router-dom";

import {
  PhoneOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const setActive = ({ isActive }) => (isActive ? "active" : "");
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
                <ShoppingCartOutlined className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
