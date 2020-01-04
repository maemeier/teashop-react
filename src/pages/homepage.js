import React from "react";
import "../style.css";
import Navbar from "../components/navbar";
import Header from "../components/header";
import Skill from "../components/skills";

const Homepage = () => {
  return (
    <section>
      <Navbar />
      <Header />
      <Skill />
    </section>
  );
};
export default Homepage;
