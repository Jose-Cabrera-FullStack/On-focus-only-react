import React from "react";
import { connect } from "react-redux";

import "../../../assets/styles/components/CoursePlus.scss";
import Course from "./Course";

const Finish = ({ myCourses }) => {
  return (
    <>
      {myCourses.some((item) => item.status === true) ? (
        myCourses.map((item, index) => {
          return item.status === false ? (
            ""
          ) : (
            <Course
              key={index}
              progress={100}
              title={item.title}
              category={item.category}
            />
          );
        })
      ) : (
        <p>No haz completado un curso aun.</p>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myCourses: state.courseVideo,
  };
};

export default connect(mapStateToProps, null)(Finish);
