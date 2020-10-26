import React from "react";
import { connect } from "react-redux";

import CapitalFirstLetter from "../../../Utils/capitalizeFirstLetter";
import "../../../assets/styles/components/CoursePlus.scss";

const Information = (props) => {
  return(
  <div className={props.OnlyDesktop ? props.OnlyDesktop : props.onlyMobile}>
    <h2 className="discovery__box__info__title course__section">
      {props.course.title
        ? CapitalFirstLetter(props.course.title)
        : "Aprendé a ser mejor lider."}
    </h2>
    <div className="course__section__name flex">
      <p className="discovery__box__info__name discovery__box__info__name--course">
        {props.course.category
          ? CapitalFirstLetter(props.course.category)
          : "Marketing"}
      </p>
      <i className="discovery__box__info__teach course__section__tech">
        -{" "}
        {props.course.teacher
          ? props.course.teacher.full_name
          : "Por Juan Pablo Laco"}
      </i>
    </div>
  </div>
)};
const mapStateToProps = (state) => {
  return {
    course: state.CourseSlug || {},
  };
};

export default connect(mapStateToProps, null)(Information);
