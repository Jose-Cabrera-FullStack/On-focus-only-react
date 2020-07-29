import React from "react";
import { connect } from "react-redux";
import { findFirst } from "obj-traverse/lib/obj-traverse";

import "../../../assets/styles/components/CoursePlus.scss";
import Course from "./Course";

const Finish = ({ myCourses }) => {
  return (
    <>
      {myCourses.some((item) => item.status === true) ? (
        myCourses.map((item, index) => {
          const videos = [];
          const module = item.module.map((item) => item.videos);
          let moduleNested = findFirst(item, "module", { module_id: index });
          let videosNested = findFirst(moduleNested, "videos", {
            status: true,
          });
          const url = `/cursos/${item.category}/${item.name}/${videosNested.url}`;

          module.forEach((item) =>
            item.map((item) => {
              videos.push(item.status);
            })
          );
          console.log(module);

          return item.status === false ? (
            ""
          ) : (
            <Course
              key={index}
              progress={100}
              title={item.title}
              src={item.featured_image}
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
