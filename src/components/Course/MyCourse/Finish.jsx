import React from "react";
import { connect } from "react-redux";

import "../../../assets/styles/components/CoursePlus.scss";
import Course from "./MyCourse";

import slugy from "../../../Utils/slugChange";

const Finish = ({ myCourses = {} }) => {
  const hasMyCourse = Object.keys(myCourses).length > 0;
  let hasFinishCourse = true;
  return !hasMyCourse || hasFinishCourse ? (
    <p>No tienes cursos Finalizados</p>
  ) : (
    <>
      {myCourses.data.map((item) =>
        item.progress === 100 ? (
          <MyCourse
            key={index}
            progress={item.progress}
            title={item.name}
            category={item.category}
            src={item.featured_image}
            url={`/mis-cursos/${item.slug}`}
            myCourseModule
          />
        ) : (
          (hasFinishCourse = false)
        )
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
