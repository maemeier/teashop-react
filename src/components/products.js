import React from "react";
import About from "../img/tea1.jpg";

const Products = () => {
  return (
    <div className="products">
      <div className="section-center clearfix">
        <div className="products-info">
          <h3 className="section-subtitle">Check out</h3>
          <h2 className="section-title">our products</h2>
        </div>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corrupti, dolores.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Corrupti, dolores.
        </p>
        <a href="products.html" className="main-btn">
          inventory
        </a>
        <div className="products-inventory" clearfix>
          <div>
            <img src={About} alt="tea" className="products-img" />
            <h3 className="products-title">Products Title</h3>
            <h3 className="products-price">6,99 CHF</h3>
          </div>
        </div>

        <div className="products-inventory" clearfix>
          <div>
            <img src={About} alt="tea" className="products-img" />
            <h3 className="products-title">Products Title</h3>
            <h3 className="products-price">6,99 CHF</h3>
          </div>
        </div>

        <div className="products-inventory" clearfix>
          <div>
            <img src={About} alt="tea" className="products-img" />
            <h3 className="products-title">Products Title</h3>
            <h3 className="products-price">6,99 CHF</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
