import React from "react";

import "../../assets/styles/components/Course.scss";
import CourseTeacherInfo from "./CourseTeacherInfo";

const CourseTeacher = () => (
  <section className="course">
    <h2 className="discovery__box__info__title course__section__title">
      Sobre el profesor.
    </h2>
    <div className="flex">
      <CourseTeacherInfo
        onlyMobile={"display__screen__mobile__without__flex"}
      />
    </div>
  </section>
);
export default CourseTeacher;
