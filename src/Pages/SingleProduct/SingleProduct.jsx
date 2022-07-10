import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Rate } from "antd";
import "./SingleProduct.scss";
import Loader from "../Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import {
  getSingleProduct,
  removeSingleProduct,
  addProductToCard,
} from "../../redux/action-creator/cart";

const SingleProduct = () => {
  const singleProduct = useSelector((state) => state.cartPage.singleProduct);
  const dispatch = useDispatch();

  const { id } = useParams();
  const [productNumber, setProductNumber] = useState(1);
  useEffect(() => {
    if (singleProduct) dispatch(getSingleProduct(id));
    return () => {
      dispatch(removeSingleProduct());
    };
  }, [id]);

  const {
    name,
    price,
    shipping,
    colors,
    reviews,
    stars,
    description,
    company,
    images,
    stock,
  } = singleProduct;
  const [selectedColor, setSelectedColor] = useState(null);
  const incrementProduct = () => {
    let amount = stock;
    if (amount > productNumber) {
      setProductNumber(productNumber + 1);
    }
  };
  const decrementProduct = () => {
    if (productNumber > 1) {
      setProductNumber(productNumber - 1);
    }
  };

  const addToCart = () => {
    dispatch(addProductToCard(selectedColor, productNumber));
  };

  return (
    <div className="single__product">
      <div className="container">
        {Object.keys(singleProduct).length === 0 ? (
          <Loader />
        ) : (
          <div className="">
            <Link to="/catalog" className="btn">
              back to ptoducts
            </Link>
            <div className="product__detail">
              <div className="product__detail__images">
                <img src={images[0].url} alt="" />
              </div>
              <div className="product__detail__main">
                <h1>{name}</h1>
                <div className="product__detail__main__rate">
                  <Rate
                    disabled
                    defaultValue={stars}
                    className="product__detail__main__rate__icon"
                  />
                  <p>({reviews} customer reviews)</p>
                </div>
                <h3>{price / 100} $</h3>
                <p>{description}</p>
                <div className="product__detail__main__info">
                  <b>Available :</b>{" "}
                  <p>{shipping === true ? "In Stok" : "Out Of Stock"}</p>
                </div>
                <div className="product__detail__main__info">
                  <b>SKU:</b>
                  <p>{id}</p>
                </div>
                <div className="product__detail__main__info">
                  <b>Brand:</b>
                  <p>{company.slice(0, 1).toUpperCase() + company.slice(1)}</p>
                </div>
                <hr />

                {stock > 0 ? (
                  <div>
                    <div className="sincgle__page__color">
                      <b>Colors:</b>
                      <div className="sincgle__page__color__box">
                        {colors.map((item, index) => {
                          if (!selectedColor && index == 0) {
                            setSelectedColor(item);
                          }
                          return (
                            <div
                              key={index}
                              name="color"
                              className={`sincgle__page__color__item ${
                                selectedColor === item &&
                                "sincgle__page__color__item__active"
                              }`}
                              onClick={() => {
                                setSelectedColor(item);
                              }}
                              style={{ backgroundColor: item }}
                            >
                              {selectedColor === item ? (
                                <i className="check icon"></i>
                              ) : (
                                ""
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <h2
                      style={{
                        cursor: "pointer",
                        fontWeight: 800,
                        marginLeft: 20,
                        marginBottom: "1rem",
                      }}
                    >
                      {" "}
                      <button
                        className="amount__btn"
                        onClick={decrementProduct}
                      >
                        -
                      </button>{" "}
                      {productNumber}{" "}
                      <button
                        className="amount__btn"
                        onClick={incrementProduct}
                      >
                        +
                      </button>
                    </h2>
                    <Link to="/cart" className="btn" onClick={addToCart}>
                      add to cart
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
