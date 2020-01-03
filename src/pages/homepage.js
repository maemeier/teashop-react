import React from "react";
import "../style.css";
import Navbar from "../components/navbar";
import Header from "../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  return (
    <section>
      <Navbar />
      <Header />
      <h1>Tea station </h1>
      {/*  <FontAwesomeIcon icon={faThumbsUp} />*/}
    </section>
  );
};
export default Homepage;
