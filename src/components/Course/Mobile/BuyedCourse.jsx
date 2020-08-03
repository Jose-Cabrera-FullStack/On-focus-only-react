import React from "react";

import "../../../assets/styles/components/Buyed.scss";
import Play from "../../../assets/static/images/svg/icon-play-white.svg";
import Arrow from "../../../assets/static/images/svg/arrow-right-circule-inside.svg";

const CourseBuyed = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={"buyed__teacher__mobile" + " " + props.onlyMobile}
    >
      <div className="flex">
        <div className="buyed__teacher__mobile__left">
          <img
            className="buyed__teacher__mobile__img"
            src={Play}
            alt="Botón de play"
          />
        </div>
        <div className="buyed__teacher__mobile__center">
          <h5>{props.title ? props.title : "Clases Lorem ipsum"}</h5>
          <p>
            {props.description
              ? props.description
              : "Lorem ipsum dolor sit amet"}
          </p>
        </div>
        <img
          className="buyed__teacher__mobile__right"
          src={Arrow}
          alt="Fecha a la derecha"
        />
      </div>
    </div>
  );
};
export default CourseBuyed;
