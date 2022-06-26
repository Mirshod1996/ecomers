import React from "react";
import "./Error.scss";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <span className="error-btn">
        <Link to="/">Go home</Link>
      </span>
    </div>
  );
};

export default Error;
