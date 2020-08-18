import React from "react";
import { connect } from "react-redux";

import "../../../assets/styles/components/Visualization.scss";
import "../../../assets/styles/components/Course.scss";

import Course from "./Course";

const CourseList = (props) => {
  const module = props.URLvideos.module;
  return (
    <div className="visualization__sidebar">
      <ol>
        {module.map((item, index) => {
          const position =
            index === 0
              ? "visualization__vertical__line--module visualization__vertical__line--module--first"
              : index + 1 === module.length
              ? item.status === false
                ? "visualization__vertical__line visualization__vertical__line--incomplete"
                : "visualization__vertical__line--module visualization__vertical__line--module--last"
              : item.status === false
              ? "visualization__vertical__line visualization__vertical__line--incomplete"
              : "visualization__vertical__line--module";
          return (
            <Course
              key={index}
              text={item.text}
              title={item.name}
              videos={item.videos}
              path={props.url}
              position={position}
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
