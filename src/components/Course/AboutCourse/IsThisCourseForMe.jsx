import React from "react";

import "../../../assets/styles/components/Course.scss";

const IsThisCourseForMe = (props) => {
  return (
    <section
      className={
        props.onlyDesktop
          ? `course__for__me ${props.onlyDesktop}`
          : `course__for__me ${props.margin}`
      }
    >
      <div>
        <h2>¿Este Curso es para mi?</h2>
        <ul>
          {props.forMe.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default IsThisCourseForMe;
