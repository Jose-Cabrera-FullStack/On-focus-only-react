import React from "react";
import { Link } from "react-router-dom";

import "../../../assets/styles/components/Buyed.scss";

import Incomplete from "../../../assets/static/images/svg/icon-course-incomplete.svg";
import Complete from "../../../assets/static/images/svg/icon-finish.svg";

const ModuleInside = ({
  id,
  text,
  isToggled,
  buyed,
  helpCenter,
  url,
  title,
  status,
}) => {
  return (
    <Link to={url} className="text-decoration">
      <div
        className={
          isToggled
            ? helpCenter
              ? "course__module__element__inside--help__center"
              : "course__module__element__inside"
            : "display-none"
        }
      >
        {buyed ? (
          <div className="flex">
            <img
              className="course__module__element__inside__icon"
              src={status ? Complete : Incomplete}
              alt="Ícono de Curso incompleto"
            />
            <div className="course__module__element__inside__right">
              <h5>Video {id + 1} - {title}</h5>
              <i>{status ? "Completa" : "Aun no se ha visto"}</i>
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
    </Link>
  );
};
export default ModuleInside;
