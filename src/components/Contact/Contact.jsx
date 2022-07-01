import React from "react";
import "../../assets/styles/main.css";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-us">
      <div className="container">
        <div className="contact-us-box">
          <h1>We will call back you </h1>
          <h4>
            If you have any questions or problems, please <br /> fill out the
            form and we will call you back.
          </h4>
          <div className="contact-input">
            <input type="text" placeholder="Your name" />
            <input type="text" placeholder="Your Email" />
            <span className="btn">Send</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
