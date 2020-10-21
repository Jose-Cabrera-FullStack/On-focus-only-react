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
    props.getMyCourses(props.user.data.token);
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

const mapStateToProps = (state) => {
  return {
    user: state.user || {},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
