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
  console.log(props)
  return (
    <div className="buyed__classes">
      <Breadcrumbs onClick={props.onClick}/>
      <CourseAbout />
      <CourseInclusive />
      <CourseForMe />
      <CourseCertificate mobile />
      <CourseTeacher />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    myCourse: state.myCourse || {},
  };
};

export default connect(mapStateToProps, null)(Information);
