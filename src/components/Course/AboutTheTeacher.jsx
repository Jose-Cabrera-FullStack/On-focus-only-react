import React from "react";

import "../../assets/styles/components/Course.scss";
import TeacherInformantion from "./Teacher/TeacherInformantion";

const AboutTheTeacher = (props) => {
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
          teacher={props.teacher}
        />
      </div>
    </section>
  );
};
export default AboutTheTeacher;
