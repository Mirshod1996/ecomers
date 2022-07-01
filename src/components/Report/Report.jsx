import React from "react";
import "./Report.scss";
import "../../assets/styles/main.css";

const Report = () => {
  return (
    <div className="backgraund">
      <div className="container">
        <div className="report">
          <div className="report-card">
            <h2>5,567</h2>
            <h4>happy clients</h4>
          </div>
          <div className="report-card">
            <h2>1245</h2>
            <h4>
              Products to <br /> choose from
            </h4>
          </div>
          <div className="report-card">
            <h2>372</h2>
            <h4>Sales per day</h4>
          </div>
          <div className="report-card">
            <h2>20</h2>
            <h4>
              Years on <br /> the market
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
