import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";
import rating from "../asset/star.png";

const Home = (props) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3111/products")
      .then((res) => res.json())
      .then((response) => setProductList(response));
  }, [productList]);

  return (
    <>
      <div className="main-content">
        <div className="main-content-container">
          <div className="main-content-header display-flex">
            <h2>Grocery list </h2>
          </div>
          <div className="main-content-body">
            <div className="main-content-list">
              {productList.length > 0 &&
                productList.map((item) => {
                  return (
                    <>
                      <div className="product-card">
                        <span className="product-name">{item.title}</span>
                        <p>{item.description}</p>
                       <span className="row">
                        <span><b>₹ {item.price}</b></span>
                        <span className="product-rating"><span>{item.rating}</span> <img src={rating} alt="star.img" className="rating-star"></img></span>
                        </span>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
