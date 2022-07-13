import React from "react";
import "../../assets/styles/main.css";
import "../../components/CategoriesCard/Categories.scss";
import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";
import { Link } from "react-router-dom";
import Navigate from "../../components/Navigate/Navigate";

const Categories = () => {
  return (
    <div>
      <Navigate title={"/categories"} />
      <div className="container">
        <div className="categories">
          <h1>Categories</h1>
          <div className="categories-row">
            <div className="categories-box">
              <CategoriesCard
                name={"office"}
                image={
                  "https://dl.airtable.com/.attachmentThumbnails/954dfa5c8ce3df84a3c7254481464366/a3bd8c4a?ts=1655618420&userId=usrQMwWEPx18KgLcP&cs=bc71546670c2b57c"
                }
              />
            </div>
            <div className="categories-box">
              <CategoriesCard
                name={"living room"}
                image={
                  "https://dl.airtable.com/.attachmentThumbnails/fe9d4f25fee307f6ae5b7a462b70b942/031464c4?ts=1655618420&userId=usrQMwWEPx18KgLcP&cs=f4a12dd22ee45b94"
                }
              />
            </div>

            <div className="categories-box">
              <CategoriesCard
                name={"kitchen"}
                image={
                  "https://dl.airtable.com/.attachmentThumbnails/e8c2f821d05b9e4e5aa450a19e62ffa5/271fc3f5?ts=1655618420&userId=usrQMwWEPx18KgLcP&cs=4097676a38ef65e4"
                }
              />
            </div>
            <div className="categories-box">
              <CategoriesCard
                name={"bedroom"}
                image={
                  "https://dl.airtable.com/.attachmentThumbnails/0446e84c5bca9643de3452a61b2d6195/1b32f48b?ts=1655618420&userId=usrQMwWEPx18KgLcP&cs=87dc1c5476d9b0db"
                }
              />
            </div>
            <div className="categories-box">
              <CategoriesCard
                name={"dining"}
                image={
                  "https://dl.airtable.com/.attachmentThumbnails/7a38cf782907773d9900165530cfa583/d9f41960?ts=1655618420&userId=usrQMwWEPx18KgLcP&cs=0e6b6b2b06b5304e"
                }
              />
            </div>
            <div className="categories-box">
              <CategoriesCard
                name={"kids"}
                image={
                  "https://dl.airtable.com/.attachmentThumbnails/1e4a818f5184993e430420a152315b40/873c7094?ts=1655618420&userId=usrQMwWEPx18KgLcP&cs=7f95dec8939255bb"
                }
              />
            </div>
          </div>
          <Link to="/catalog">
            <span className="btn">See all</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
