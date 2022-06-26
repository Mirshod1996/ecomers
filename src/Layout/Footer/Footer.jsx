import React from "react";
import "./Footer.scss";
import "../../assets/styles/main.css";
import Logo from "../../assets/images/LogoBottom.png";
import Faesbook from "../../assets/images/f.png";
import Twitter from "../../assets/images/twitter .png";
import Vk from "../../assets/images/vk.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-box">
          <div className="footer-icons">
            <img src={Logo} alt="" className="footer-logo" />

            <div className="footer-icon">
              <img src={Vk} alt="" className="foter-icon-img" />
              <img src={Twitter} alt="" className="foter-icon-img" />
              <img src={Faesbook} alt="" className="foter-icon-img" />
            </div>
          </div>
          <div className="footer-mains">
            <div className="footer-main">
              <h3>Navigation</h3>
              <Link to="/">
                <h5>Home</h5>
              </Link>
              <Link to="/categories">
                <h5>Categories</h5>
              </Link>
              <Link to="/catalog">
                <h5>Catalog</h5>
              </Link>
              <h5>Wholesale trade</h5>
              <h5>About au</h5>
            </div>
            <div className="footer-main">
              <h3>Our contacts</h3>
              <h5>Phones</h5>
              <h5>+7 (988) 565 00 38</h5>
              <h5>+375 33 662 82 56</h5>
              <h5>Email</h5>
              <h5>vladpertcev@mail.ru</h5>
              <h5>korobko416@gmail.com</h5>
            </div>
            <div className="footer-main">
              <h3>Our address</h3>
              <h5>
                Россия, <br /> Ростов-на-Дону ул. <br /> Богачева, 16
              </h5>
            </div>
            <div className="footer-main">
              <h3>Information</h3>
              <h5>Shipping and payment</h5>
              <h5>Guarantees</h5>
              <h5>Purchase returns</h5>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <h4>© 2022 Golden Soft All rights reserved.</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
