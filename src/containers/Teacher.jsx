import React from "react";
import { connect } from "react-redux";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Teacher/Hero";
import Points from "../components/Teacher/Points";
import TeacherFAQ from "../components/Teacher/FAQ";
import HeroDown from "../components/Teacher/HeroDown";

import "../assets/styles/App.scss";

const Teacher = (props) => {
  let grid = "grid-column-2";

  return (
    <div className="App">
      <Header history={props.history} />
      <Hero />
      <Points grid={grid} />
      <TeacherFAQ />
      <HeroDown />
      <Footer />
    </div>
  );
};

export default connect(null, null)(Teacher);
