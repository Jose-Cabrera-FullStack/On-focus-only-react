import React from "react";
import { connect } from "react-redux";

import ShoppingCar from "../components/Payment/ShoppingCar";
import CourseAndDiploma from "../components/Principal/CourseAndDiploma";
import Header from "../components/Header";

import "../assets/styles/App.scss";

const Course = (props) => {
  const column = "grid-column-3";
  const none = "display-none";
  const info = "Cursos recomendados.";

  return (
    <div className="App">
      <Header history={props.history} />
      <ShoppingCar onlyMobile={"display__screen__mobile__without__flex"} />
      <CourseAndDiploma onlyThree column={column} none={none} info={info} />
    </div>
  );
};

export default connect(null, null)(Course);
