import React from "react";
import { connect } from "react-redux";

import "../../../assets/styles/components/CoursePlus.scss";
import Course from "./Course";

const AllCourse = ({ myCourses }) => {
  return (
    <>
      {myCourses.map((item, index) => {
          return(
              <Course key={index}/>
          )
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myCourses: state.courseVideo,
  };
};

export default connect(mapStateToProps, null)(AllCourse);
