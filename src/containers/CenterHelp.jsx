import React from "react";
import { connect } from "react-redux";

import Politicy from "../components/Profile/Politicy";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/styles/App.scss";
import "../assets/styles/components/Payment.scss";

const Payment = (props) => {
  return (
    <div className="App">
      <Header history={props.history} />
      <Politicy />
      <Footer />
    </div>
  );
};

export default connect(null, null)(Payment);
