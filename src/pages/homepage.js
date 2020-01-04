import React from "react";
import "../style.css";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Skill from "../components/skills";
import AboutUs from "../components/aboutUs";
import Products from "../components/products";

const Homepage = () => {
  return (
    <section>
      <Navbar />
      <Header />
      <Skill />
      <AboutUs />
      <Products />
    </section>
  );
};
export default Homepage;
