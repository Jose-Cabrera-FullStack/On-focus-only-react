import React from "react";
import { connect } from "react-redux";
import { findFirst } from "obj-traverse/lib/obj-traverse";

import "../../../assets/styles/components/CoursePlus.scss";
import Course from "./Course";

const AllCourse = ({ myCourses }) => {
  return (
    // se debe refactorizar para la segunda instancia
    <>
      {myCourses.map((item, index) => {
        const videos = [];
        let url = "";
        const urlStatusFalse = [];
        const module = item.module.map((item) => item.videos);
        module.forEach((item) =>
          item.map((item) => {
            if (item.status === false) urlStatusFalse.push(item.url);
            videos.push(item.status);
          })
        );

        let videosFinish = 0;

        videos.forEach((item) =>
          item === true ? (videosFinish += 1) : "no se ha termiando"
        );

        videos.length === videosFinish
          ? (url = `/cursos/${item.category}/${item.name}/${module[0][0].url}`)
          : (url = `/cursos/${item.category}/${item.name}/${urlStatusFalse[0]}`);

        return (
          <Course
            key={index}
            progress={(videosFinish / videos.length) * 100}
            title={item.title}
            category={item.category}
            src={item.featured_image}
            url={url}
          />
        );
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
