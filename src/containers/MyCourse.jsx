import React, { useEffect } from "react";
import { connect } from "react-redux";

import Hero from "../components/Utils/Hero";
import MyCourse from "../components/Course/MyCourse";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { getMyCourses } from "../actions";

import "../assets/styles/App.scss";

const Courses = (props) => {
  useEffect(() => {
    props.getMyCourses(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1aXNnYXJjZXNsZW9uQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2MDE4MjgzNTcsImV4cCI6MTYzMzM2NDM1N30.kDm4zHFU2NgG-rOkzAcVOyGy0tBOoMhpJaNv-UywZdM"
    );
  }, []);
  return (
    <div className="App">
      <Header history={props.history} />
      <Hero />
      <MyCourse />
      <Footer />
    </div>
  );
};

const mapDispatchToProps = {
  getMyCourses,
};

export default connect(null, mapDispatchToProps)(Courses);
