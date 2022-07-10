import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
const Card = ({ image, name, category, id, price }) => {
  return (
    <div>
      <section className="cards">
        <Link to={`/catalog/${id}`}>
          <article className="card ">
            <div
              className="card__img"
              style={{
                backgroundImage: `url(${image}
                )`,
              }}
            ></div>
            <div
              className="card__img--hover"
              style={{
                backgroundImage: `url(${image}
                )`,
              }}
            ></div>
            <div className="card__info">
              <span className="card__category"> {category}</span>
              <h3 className="card__title">{name}</h3>
              <span className="card__by">
                Price
                <span className="card__author" title="author">
                  {price / 100} $
                </span>
              </span>
            </div>
          </article>
        </Link>
      </section>
    </div>
  );
};

export default Card;
