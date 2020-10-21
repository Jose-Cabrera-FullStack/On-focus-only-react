import React from "react";
import { connect } from "react-redux";

import "../../../assets/styles/components/CoursePlus.scss";
import MyCourse from "./MyCourse";

import slugy from "../../../Utils/slugChange";

const InProgress = ({ myCourses = {} }) => {
  const hasMyCourse = Object.keys(myCourses).length > 0;
  return !hasMyCourse ? (
    <p>No tienes cursos En curso</p>
  ) : (
    myCourses.data.map((item, index) =>
      item.progress < 100 ? (
        <MyCourse
          key={index}
          progress={item.progress}
          title={item.name}
          category={item.category}
          src={item.featured_image}
          url={`/mis-cursos/${item.slug}/`}
          myCourseModule
        />
      ) : (
        <p>No tiene elementos</p>
      )
    )
  );
};

const mapStateToProps = (state) => {
  return {
    myCourses: state.myCourses,
  };
};

export default connect(mapStateToProps, null)(InProgress);
