import React from "react";
import { connect } from "react-redux";

import Hero from "../components/Utils/Hero";
import MyCourse from "../components/Course/MyCourse";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../assets/styles/App.scss";

const Courses = (props) => {
  return (
    <div className="App">
      <Header history={props.history} />
      <Hero />
      <MyCourse />
      <Footer />
    </div>
  );
};

export default connect(null, null)(Courses);
