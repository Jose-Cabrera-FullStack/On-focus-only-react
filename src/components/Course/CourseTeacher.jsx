import React from "react";

import "../../assets/styles/components/Course.scss";
import TeacherInformantion from "./TeacherInformantion";

const CourseTeacher = (props) => {
  return (
    <section
      className={`course ${
        props.onlyDesktop ? props.onlyDesktop : props.margin
      }`}
    >
      <h2 className="discovery__box__info__title course__section__title">
        Sobre el profesor.
      </h2>
      <div className="flex">
        <TeacherInformantion
          onlyMobile={"display__screen__mobile__without__flex"}
        />
      </div>
    </section>
  );
};
export default CourseTeacher;
