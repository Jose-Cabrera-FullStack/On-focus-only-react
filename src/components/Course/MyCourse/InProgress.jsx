import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../../../assets/styles/components/CoursePlus.scss";
import Course from "./Course";

const InProgress = ({ myCourses }) => {
  return (
    <>
      {myCourses.some((item) => item.status === true) ? (
        myCourses.map((item, index) => {
          return item.status === true ? (
            ""
          ) : (
            <Course
              key={index}
              progress={90}
              title={item.title}
              category={item.category}
            />
          );
        })
      ) : (
        <p>No tiene elementos</p>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myCourses: state.courseVideo,
  };
};

export default connect(mapStateToProps, null)(InProgress);
