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
            <div key={index}>
              {/* <div className="visualization__sidebar__absolute">
                {index === 0 ? (
                  <div className="visualization__vertical__line--first"></div>
                ) : index + 1 === module.length ? (
                  <div className="visualization__vertical__line--last"></div>
                ) : (
                  <div className="visualization__vertical__line"></div>
                )}
                {index + 1 === module.length ? console.log("es el ultimo") : ""}
              </div> */}

              <Course
                key={index}
                text={item.text}
                title={item.name}
                videos={item.videos}
                path={props.url}
                last={index + 1 === module.length ? true : false}
              />
            </div>
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
