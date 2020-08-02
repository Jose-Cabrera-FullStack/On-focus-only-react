import React from "react";

import "../../../assets/styles/components/Buyed.scss";

const AboutCourseAndClasses = ({ isSwitch, methodAbout, methodClasses }) => {
  return (
    <div className="buyed__bar flex display__screen__desktop">
      <p
        className={
          isSwitch === ""
            ? "buyed__bar__text buyed__bar--select"
            : "buyed__bar__text"
        }
        onClick={methodAbout}
      >
        Sobre este curso
      </p>
      <p
        className={
          isSwitch === "Classes"
            ? "buyed__bar__text buyed__bar--select"
            : "buyed__bar__text"
        }
        onClick={methodClasses}
      >
        Clases del curso
      </p>
    </div>
  );
};
export default AboutCourseAndClasses;
