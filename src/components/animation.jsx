import React from "react";
import "./animation.scss";

const animation = () => {
  return (
    <div className="container">
      <div className="animate">
        <div className="animate-container">
          <div className="image">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXgb1TCracOEqmud61lRU4Yp-qXIDDMLPYQ58_t9iyeGMo8FiEx3qe8bBVScVegd5gLKQ&usqp=CAU"
              }
            />
            <span>Mouse</span>
          </div>
          <hr />
          <div className="image">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXgb1TCracOEqmud61lRU4Yp-qXIDDMLPYQ58_t9iyeGMo8FiEx3qe8bBVScVegd5gLKQ&usqp=CAU"
              }
            />
            <span>Over</span>
          </div>
          <hr />
          <div className="image">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXgb1TCracOEqmud61lRU4Yp-qXIDDMLPYQ58_t9iyeGMo8FiEx3qe8bBVScVegd5gLKQ&usqp=CAU"
              }
            />
            <span>Me</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default animation;
