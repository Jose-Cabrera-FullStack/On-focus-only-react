import React from "react";
import { connect } from "react-redux";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Podcast/Hero";
import Spotify from "../components/Podcast/Spotify";
import Information from "../components/Podcast/Information";
import "../assets/styles/App.scss";

const Podcast = (props) => {
  return (
    <div className="App">
      <Header history={props.history} />
      <Hero />
      <Spotify />
      <Information />
      <Footer />
    </div>
  );
};

export default connect(null, null)(Podcast);
