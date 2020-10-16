import React from "react";
import { connect } from "react-redux";

import Pay from "../components/Payment/Pay";
import Details from "../components/Payment/Details";
import WhatIsBuying from "../components/Payment/WhatIsBuying";
import SecurePay from "../components/Payment/SecurePay";
import Header from "../components/Header";
import FooterPayment from "../components/Payment/Footer";

import "../assets/styles/App.scss";
import "../assets/styles/components/Payment.scss";

const Payment = (props) => {
  return (
    <div className="App">
      <Header history={props.history} />
      <div className="payment">
        <div className="display__screen__mobile">
          <Details />
          <Pay
            history={props.history}
            onlyDesktop={"display__screen__desktop"}
          />
        </div>
        <div className="grid-1 display__screen__desktop">
          <Pay history={props.history} />
        </div>
        <div className="payment__right grid-2 display__screen__desktop">
          <Details />
          <WhatIsBuying />
        </div>
      </div>
      <SecurePay />
      <FooterPayment onlyDesktop={"display__screen__desktop"} />
    </div>
  );
};

export default connect(null, null)(Payment);
