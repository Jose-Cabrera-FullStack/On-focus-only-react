import React from "react";
import { connect } from "react-redux";

import "../../../assets/styles/components/Buyed.scss";

import CourseAbout from "../../../components/Course/AboutCourse/CourseAbout";
import CourseCertificate from "../../../components/Course/AboutCourse/CourseCertificate";
import CourseInclusive from "../../../components/Course/CourseInclusive";
import CourseForMe from "../../../components/Course/CourseForMe";
import CourseTeacher from "../../../components/Course/CourseTeacher";

import Breadcrumbs from "../../Utils/Breadcrumbs";

const Information = (props) => {
  return (
    <div className="buyed__classes">
      <div className="buyed__classes__breadcrumbs__mobile">
        <Breadcrumbs
          onClick={props.onClick}
          margin={"beadcrumbs--my-course__mobile"}
        />
        <CourseAbout />
        <CourseInclusive />
        <CourseForMe margin={"course__for__me--my-courses__information"} />
        <CourseCertificate mobile />
        <CourseTeacher margin={"course--emergent__menu__mobile"} />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    myCourse: state.myCourse || {},
  };
};

export default connect(mapStateToProps, null)(Information);
