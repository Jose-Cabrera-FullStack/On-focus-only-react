import React from "react";
import { connect } from "react-redux";

import "../../../assets/styles/components/CoursePlus.scss";
import Course from "./MyCourse";

import slugfy from "../../../Utils/slugChange";

const AllCourse = ({ myCourse }) => {
  return (
    <>
      {myCourse.map((item, index) => {
        const videos = [];
        let url = "";
        const urlStatusFalse = [];
        const module = item.modules.map((item) => item.videos);
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
          ? (url = `/mis-cursos/${slugfy(item.title)}`)
          : (url = `/mis-cursos/${slugfy(item.title)}`);

        return (
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
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myCourse: state.myCourses,
  };
};

export default connect(mapStateToProps, null)(AllCourse);
