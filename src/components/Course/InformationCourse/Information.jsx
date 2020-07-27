import React from "react";
import { connect } from "react-redux";

import CapitalFirstLetter from "../../../Utils/capitalizeFirstLetter";
import "../../../assets/styles/components/CoursePlus.scss";

const CourseInfo = (props) => (
  <div className={props.OnlyDesktop}>
    <h2 className="discovery__box__info__title course__section">
      {props.category.name
        ? CapitalFirstLetter(props.category.name)
        : "Aprendé a ser mejor lider."}
    </h2>
    <div className="course__section__name flex">
      <p className="discovery__box__info__name discovery__box__info__name--course">
        {props.category.category
          ? CapitalFirstLetter(props.category.category)
          : Marketing}
      </p>
      <i className="discovery__box__info__teach course__section__tech">
        -{" "}
        {props.category.teacher
          ? props.category.teacher
          : "Por Juan Pablo Laco"}
      </i>
    </div>
  </div>
);
const mapStateToProps = (state) => {
  return {
    category: state.category || {},
  };
};

export default connect(mapStateToProps, null)(CourseInfo);
