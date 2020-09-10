import React from "react";
import { connect } from "react-redux";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Profile/Hero";
import Data from "../components/Profile/Data";

import "../assets/styles/App.scss";
import "../assets/styles/components/Data.scss";

const MyProfile = (props) => {
  return (
    <div className="App">
      <Header history={props.history} />
      <Hero />
      <Data />
      <Footer onlyDesktop={"display__screen__desktop"} />
    </div>
  );
};

export default connect(null, null)(MyProfile);
