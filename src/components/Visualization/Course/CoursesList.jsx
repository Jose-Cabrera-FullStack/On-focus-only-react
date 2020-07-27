import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../../../assets/styles/components/Visualization.scss";
import "../../../assets/styles/components/Course.scss";

import Course from "./Course";

const CourseList = (props) => {
  const module = props.URLvideos.module;
  return (
    <div className="visualization__sidebar">
      <ol>
        {module.map((item, index) => {
          return (
            <Course
              key={index}
              text={item.text}
              title={item.name}
              videos={item.videos}
              path={props.url}
            />
          );
        })}
      </ol>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    URLvideos: state.URLvideos,
  };
};

export default connect(mapStateToProps, null)(CourseList);
