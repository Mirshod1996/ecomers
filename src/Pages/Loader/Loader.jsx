import React from "react";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-wrapper">
        <div className="loder-crcil"></div>
        <div className="text">loading ...</div>
      </div>
    </div>
  );
};

export default Loader;
