import React from "react";
import { connect } from "react-redux";

import "../../../assets/styles/components/CoursePlus.scss";
import Course from "./MyCourse";

import slugy from "../../../Utils/slugChange";

const InProgress = ({ myCourses }) => {
  const hasMyCourse = Object.keys(myCourses).length > 0;
  return !hasMyCourse ? (
    <p>No tienes cursos En curso</p>
  ) : (
    <>
      {myCourses.some((item) => item.status !== true) ? (
        myCourses.map((item, index) => {
          const videos = [];
          const module = item.modules.map((item) => item.videos);
          const url = `/mis-cursos/${slugy(item.title)}`;
          module.forEach((item) =>
            item.map((item) => {
              videos.push(item.status);
            })
          );

          let videosFinish = 0;

          videos.forEach((item) =>
            item === true ? (videosFinish += 1) : "no se ha termiando"
          );

          return item.status === true ? (
            ""
          ) : (
            <Course
              key={index}
              progress={(videosFinish / videos.length) * 100}
              title={item.title}
              category={item.category}
              src={item.featured_image}
              url={url}
              myCourseModule
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
    myCourses: state.myCourses,
  };
};

export default connect(mapStateToProps, null)(InProgress);
