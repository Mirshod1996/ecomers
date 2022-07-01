import React from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import "./Carusel.scss";
import "../../assets/styles/main.css";

const Carusel = () => (
  <Carousel autoplay effect="fade">
    <div className="carusels">
      <h3 className="carusel">
        <img
          src={
            "https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160?ts=1655552451&userId=usrQMwWEPx18KgLcP&cs=42c18b6db0d15627"
          }
          alt=""
          className="exapmle"
        />
      </h3>
    </div>
    <div className="carusels">
      <h3 className="carusel">
        <img
          src={
            "https://dl.airtable.com/.attachments/ee3ed75c53f1a352c45e18fcde8f7390/d00187fb/extra-1.jpeg?ts=1655533210&userId=usrQMwWEPx18KgLcP&cs=77317c293f941163"
          }
          alt=""
          className="exapmle"
        />
      </h3>
    </div>
    <div>
      <h3 className="carusel">
        <img
          src={
            "https://dl.airtable.com/.attachments/8972b8b6245c3b6be2530797beb426bd/db3ddba9/extra-2.jpeg?ts=1655533210&userId=usrQMwWEPx18KgLcP&cs=ffa5963513b82055"
          }
          alt=""
          className="exapmle"
        />
      </h3>
    </div>
    <div>
      <h3 className="carusel">
        <img
          src={
            "https://dl.airtable.com/.attachments/a2848c44d624f22e092426d0f85e45a8/e5c860b5/extra-3.jpeg?ts=1655533210&userId=usrQMwWEPx18KgLcP&cs=964b6346f634c47a"
          }
          alt=""
          className="exapmle"
        />
      </h3>
    </div>
    <div>
      <h3 className="carusel">
        <img
          src={
            "https://dl.airtable.com/.attachments/946256810a22dc7cb0ecad4e3e2faac4/1d3cd5e7/extra-4.jpeg?ts=1655533210&userId=usrQMwWEPx18KgLcP&cs=1de8bc70b6a5c016"
          }
          alt=""
          className="exapmle"
        />
      </h3>
    </div>
  </Carousel>
);

export default Carusel;
