import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearProductCart } from "../../redux/action-creator/cart";
import Navigate from "../../components/Navigate/Navigate";

const Cart = () => {
  const product = useSelector((state) => state.cartPage.cartProducts);
  const dispatch = useDispatch();
  console.log(product);
  return (
    <div>
      {product.length !== 0 ? (
        <div>
          <Navigate title={"/Cart"} />
          <div className="container">
            <div className="select__product">
              <div className="cart__title">
                <div className="cart__img">
                  <p>Item</p>
                </div>
                <div className="cart__ptice">
                  <p>Price</p>
                </div>
                <div className="cart_quantity">
                  <p>Quantity</p>
                </div>
                <div className="cart__subtotal">
                  <p>Subtotal</p>
                </div>
                <div className="cart__delete"></div>
              </div>
              <hr />
              {product.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
              <hr style={{ marginTop: 50 }} />

              <div className="cart__btns">
                <Link to="/catalog" className="btn">
                  continue shopping
                </Link>

                <span
                  className="btn-clear"
                  onClick={() => {
                    dispatch(clearProductCart());
                  }}
                >
                  clear shopping cart
                </span>
              </div>
              <div className="subtotal">
                <div className="order__total__box">
                  <div className="subtotal__box">
                    <h4 className="order__total__box__title">Subtotal :</h4>{" "}
                    <h4 className="order__total__box__price">
                      ${product.subtotal}
                    </h4>
                  </div>
                  <div className="subtotal__box">
                    <p className="order__total__box__title">Shipping Free :</p>{" "}
                    <p className="order__total__box__price">$5.34</p>
                  </div>
                  <hr />
                  <div
                    className="subtotal__box"
                    style={{
                      paddingTop: "1rem",
                      paddingBottom: "1rem",
                    }}
                  >
                    <h3 className="order__total__box__title">Order Total :</h3>
                    <h3 className="order__total__box__price">$18.564</h3>
                  </div>
                </div>
                <div className="login__btn">
                  <span
                    className="btn"
                    style={{ width: "100%", textAlign: "center", margin: "0" }}
                  >
                    login
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="empty__cart">
            <h1>Your cart is empty</h1>

            <Link to="/catalog" className="btn">
              fill it
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
