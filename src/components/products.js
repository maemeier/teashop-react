import React from "react";
import About from "../img/tea1.jpg";
import About1 from "../img/tea4.png";

const Products = () => {
  return (
    <div className="products">
      <div className="section-center clearfix">
        <div className="products-info">
          <div>
            <h3 class="section-subtitle">check out</h3>
            <h2 class="section-title text-white">our products</h2>
          </div>
          <p className="products-text">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corrupti, dolores.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Corrupti, dolores.
          </p>
          <a href="products.html" className="main-btn">
            inventory
          </a>
        </div>

        <div className="products-inventory clearfix">
          <div class="product">
            <img src={About1} alt="tea" className="products-img" />
            <h3 className="products-title ">Products Title</h3>
            <h3 className="products-price">6,99 CHF</h3>
          </div>

          <div class="product">
            <img src={About1} alt="tea" className="products-img" />
            <h3 className="products-title">Products Title</h3>
            <h3 className="products-price">6,99 CHF</h3>
          </div>

          <div class="product">
            <img src={About1} alt="tea" className="products-img" />
            <h3 className="products-title">Products Title</h3>
            <h3 className="products-price">6,99 CHF</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
