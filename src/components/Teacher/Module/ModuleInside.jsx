import React from "react";

import "../../../assets/styles/components/Buyed.scss";

import Incomplete from "../../../assets/static/images/svg/icon-course-incomplete.svg";

const ModuleInside = ({ text, isToggled, buyed, helpCenter }) => {
  return (
    <div
      className={
        isToggled
          ? helpCenter
            ? "course__module__element__inside--help__center slide-in-top"
            : "course__module__element__inside course__module__element__inside--teacher slide-in-top"
          : "display-none"
      }
    >
      {buyed ? (
        <div className="flex">
          <img
            className="course__module__element__inside__icon"
            src={Incomplete}
            alt="Ícono de Curso incompleto"
          />
          <div className="course__module__element__inside__right">
            <h5>Video 1 - Lorem ipsum dolor sit amet.</h5>
            <i>Completa</i>
          </div>
        </div>
      ) : (
        <p
          className={
            helpCenter ? "politicy__inside__right__text--help__center" : ""
          }
        >
          {text}
        </p>
      )}
    </div>
  );
};
export default ModuleInside;
