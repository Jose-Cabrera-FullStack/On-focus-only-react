import React, { useState } from "react";

import "../../../assets/styles/components/Buyed.scss";

import ModuleInside from "./ModuleInside";

import ArrowUp from "../../../assets/static/images/svg/arrow-up-black.svg";
import ArrowDown from "../../../assets/static/images/svg/arrow-down-black.svg";
import Reloj from "../../../assets/static/images/svg/reloj.svg";

import Play from "../../../assets/static/images/svg/icon-play-black.svg";

const Module = ({ text, buyed }) => {
  const [isToggled, setToggled] = useState(false);

  const toggleTrueFalse = () => setToggled(!isToggled);
  return (
    <div>
      <div
        className="course__module__element course__module__element--teacher"
        onClick={toggleTrueFalse}
      >
        <div>
          <h3 className="course__module__element__title--help__center course__module__element__title--teacher">
            ¿Lorem ipsum dolor sit amet?
          </h3>
          <img
            className={
              buyed
                ? "course__module__arrow course__module__arrow--buyed"
                : isToggled
                ? "course__module__arrow--help__center arrow-rotation-up"
                : "course__module__arrow--help__center arrow-rotation-down"
            }
            src={ArrowDown}
            alt="Flecha hacia abajo"
          />
        </div>
      </div>
      <ModuleInside
        text={text ? text : "hola"}
        isToggled={isToggled}
        buyed={buyed}
      />
    </div>
  );
};
export default Module;
