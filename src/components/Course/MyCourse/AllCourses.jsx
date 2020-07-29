import React from "react";
import { connect } from "react-redux";

import "../../../assets/styles/components/CoursePlus.scss";
import Course from "./Course";

const AllCourse = ({ myCourses }) => {
  return (
    <>
      {myCourses.map((item, index) => {
        const videos = [];
        const module = item.module.map((item) => item.videos);
        module.forEach((item) => item.map((item) => videos.push(item.status)));

        let videosFinish = 0;

        videos.forEach((item) =>
          item === true ? (videosFinish += 1) : "no se ha termiando"
        );

        return (
          <Course
            key={index}
            progress={(videosFinish / videos.length) * 100}
            title={item.title}
            category={item.category}
            src={item.featured_image}
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
