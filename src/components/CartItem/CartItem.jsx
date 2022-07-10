import React from "react";
import "./CartItem.scss";
const CartItem = () => {
  return (
    <div className="cart__item">
      <div className="cart__img">
        <div className="item__image">
          <img
            src={
              "https://dl.airtable.com/.attachments/97a67b32630a587e482863a61861607b/547d4b22/product-6.jpg?ts=1656924121&userId=usrQMwWEPx18KgLcP&cs=09efcee4dde0531a"
            }
            alt=""
          />
          <div>
            <h5> emperor bed</h5>

            <div className="item__image__title">
              <p>Color : </p>
              <div
                style={{
                  backgroundColor: "blue",
                  width: "1rem",
                  height: "1rem",
                  marginLeft: 5,
                  marginTop: 3,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="cart__ptice">
        <p className="cart__price">23999 $</p>
      </div>
      <div className="cart_quantity">
        <div className="amount__box">
          <button className="amount__box__btn">-</button> <b>5</b>
          <button className="amount__box__btn">+</button>
        </div>
      </div>
      <div className="cart__subtotal">
        <p className="cart__subtotal">45632$</p>
      </div>
      <div className="cart__delete">
        <i>
          <i
            className="trash icon"
            style={{ fontSize: 18, cursor: "pointer" }}
          ></i>
        </i>
      </div>
    </div>
  );
};

export default CartItem;
