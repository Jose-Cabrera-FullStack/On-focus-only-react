import React, { useState } from "react";
// import { connect } from 'react-redux';
// import { loginUser } from '../actions';
import Header from "../components/Header";
import "../assets/styles/components/Register.scss";

const NotFound = (props) => {
  return (
    <div>
      <Header history={props.history} />
      <h1>ERROR 404</h1>
      <h3>Not Found</h3>
    </div>
  );
};

export default NotFound;
