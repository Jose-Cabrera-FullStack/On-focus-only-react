import React from "react";
import { connect } from "react-redux";

import Hero from "../components/Course/Hero";
import CourseAndDiploma from "../components/Principal/CourseAndDiploma";
import AboutUs from "../components/Principal/AboutUs";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../assets/styles/App.scss";

const Courses = (props) => {
  return (
    <div className="App">
      <Header history={props.history} />
      <Hero />
      <CourseAndDiploma />
      <AboutUs />
      <Footer />
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     course: state.course,
//   };
// };

// const mapDispatchToProps = {
//   getCourseCategory,
// };

export default connect(null, null)(Courses);
