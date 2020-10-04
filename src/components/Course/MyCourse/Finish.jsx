import React from "react";
import { connect } from "react-redux";

import "../../../assets/styles/components/CoursePlus.scss";
import Course from "./MyCourse";

const Finish = ({ myCourses }) => {
  // se debe refactorizar para la segunda instancia
  return (
    <>
      {myCourses.some((item) => item.status === true) ? (
        myCourses.map((item, index) => {
          const videos = [];
          const module = item.modules.map((item) => item.videos);

          module.forEach((item) =>
            item.map((item) => {
              videos.push(item.url);
            })
          );

          videos.push(videos);
          const url = `/mis-cursos/${item.name}`;

          return item.status === false ? (
            ""
          ) : (
            <Course
              key={index}
              progress={100}
              title={item.title}
              src={item.featured_image}
              category={item.category}
              url={url}
              myCourseModule
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
    myCourses: state.myCourses,
  };
};

export default connect(mapStateToProps, null)(Finish);
