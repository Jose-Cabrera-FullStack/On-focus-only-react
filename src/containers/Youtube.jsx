import React from "react";
import { connect } from "react-redux";

import Hero from "../components/Youtube/Hero";
import Video from "../components/Youtube/Video";
import Information from "../components/Youtube/Information";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../assets/styles/App.scss";

const Youtube = (props) => {
  return (
    <div className="App">
      <Header history={props.history} />
      <Hero />
      <Video />
      <Information />
      <Footer />
    </div>
  );
};

export default connect(null, null)(Youtube);
