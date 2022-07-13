import React from "react";
import { useDispatch } from "react-redux";
import "./CartItem.scss";
import { changeProductCart } from "../../redux/action-creator/cart";
import { deleteProductInCart } from "../../redux/action-creator/cart";
import { useState } from "react";

const CartItem = ({ image, color, name, price, stock, id, max }) => {
  const dispatch = useDispatch();
  const [newStock, setNewStock] = useState(stock);
  const incrementStock = () => {
    if (newStock <= max) {
      setNewStock((newStock) => newStock + 1);
    }
    dispatch(changeProductCart(newStock, id));
  };
  const decrementStock = () => {
    if (newStock > 1) {
      setNewStock((newStock) => newStock - 1);
    }
    dispatch(changeProductCart(newStock, id));
  };
  return (
    <div className="cart__item">
      <div className="cart__img">
        <div className="item__image">
          <img src={image} alt="" />
          <div>
            <h5>{name}</h5>

            <div className="item__image__title">
              <p>Color : </p>
              <div
                style={{
                  backgroundColor: color,
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
        <p className="cart__price">{price} $</p>
      </div>
      <div className="cart_quantity">
        <div className="amount__box">
          <button className="amount__box__btn" onClick={decrementStock}>
            -
          </button>{" "}
          <b>{stock}</b>
          <button className="amount__box__btn" onClick={incrementStock}>
            +
          </button>
        </div>
      </div>
      <div className="cart__subtotal">
        <p className="cart__subtotal">{stock * price}$</p>
      </div>
      <div className="cart__delete">
        <i>
          <i
            className="trash icon"
            style={{ fontSize: 18, cursor: "pointer" }}
            onClick={() => {
              dispatch(deleteProductInCart(id));
            }}
          ></i>
        </i>
      </div>
    </div>
  );
};

export default CartItem;
