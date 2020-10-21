import React from "react";
import { connect } from "react-redux";

import "../../../assets/styles/components/CoursePlus.scss";
import MyCourse from "./MyCourse";

import slugfy from "../../../Utils/slugChange";

const AllCourse = ({ myCourse = {} }) => {
  const hasMyCourse = Object.keys(myCourse).length > 0;
  return !hasMyCourse ? (
    <p>No tienes cursos comprados</p>
  ) : (
    <>
      {myCourse.data.map((item, index) => {
        return (
          <MyCourse
            key={index}
            progress={item.progress}
            title={item.name}
            category={item.category}
            src={item.featured_image}
            url={`/mis-cursos/${item.slug}`}
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
