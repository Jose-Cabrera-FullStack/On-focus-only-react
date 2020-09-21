import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { findFirst } from "obj-traverse/lib/obj-traverse";

import "../../../assets/styles/components/CoursePlus.scss";
import Course from "./MyCourse";

const InProgress = ({ myCourses }) => {
  // se debe refactorizar para la segunda instancia
  return (
    <>
      {myCourses.some((item) => item.status === true) ? (
        myCourses.map((item, index) => {
          const videos = [];
          const module = item.module.map((item) => item.videos);
          let moduleNested = findFirst(item, "module", { module_id: index });
          let videosNested = findFirst(moduleNested, "videos", {
            status: false,
          });
          const url = `/mis-cursos/${item.name}`;
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
