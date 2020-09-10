import React from "react";
import { connect } from "react-redux";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Utils/Hero";
import Contact from "../components/Profile/Contact";

import "../assets/styles/App.scss";

const ContactUs = (props) => {
  return (
    <div className="App">
      <Header history={props.history} />

      <Hero title={"Contacto"} />
      <Contact onlyMobile={"display__screen__mobile__without__flex"} />
      <Footer onlyDesktop={"display__screen__desktop"} />
    </div>
  );
};

export default connect(null, null)(ContactUs);
