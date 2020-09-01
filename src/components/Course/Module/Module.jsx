import React, { useState } from "react";

import "../../../assets/styles/components/Buyed.scss";
import "../../../assets/styles/components/Principal.scss";

import ModuleInside from "./ModuleInside";

import ArrowDown from "../../../assets/static/images/svg/arrow-down-black.svg";
import Reloj from "../../../assets/static/images/svg/reloj.svg";

import Play from "../../../assets/static/images/svg/icon-play-black.svg";

const Module = ({
  id,
  title,
  text,
  duration,
  buyed,
  helpCenter,
  item,
  urlData,
  margin,
  myCourse
}) => {
  const [isToggled, setToggled] = useState(false);

  const toggleTrueFalse = () => setToggled(!isToggled);
  return (
    <div>
      <div
        className={
          "course__module__element" + " " + margin + " " + " slide-in-top"
        }
        onClick={toggleTrueFalse}
      >
        {helpCenter ? (
          <div>
            <h3 className="course__module__element__title--help__center">
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
        ) : (
          <div>
            <img
              className={buyed ? "course__module__play" : "display-none"}
              src={Play}
              alt="Ícono de Play"
            />
            <img
              className={
                buyed
                  ? isToggled
                    ? "course__module__arrow course__module__arrow--buyed arrow-rotation-up"
                    : "course__module__arrow course__module__arrow--buyed arrow-rotation-down"
                  : isToggled
                  ? "course__module__arrow arrow-rotation-up"
                  : "course__module__arrow arrow-rotation-down"
              }
              src={ArrowDown}
              alt="Flecha hacia abajo"
            />
            <strong className="course__module__element__title">
              Módulo {id} - {title ? title : duration}{" "}
            </strong>
            {buyed ? (
              <p className="course__module__sub__title">{text}</p>
            ) : (
              <div className="flex course__module__time">
                <img
                  className="course__module__reloj"
                  src={Reloj}
                  alt="reloj"
                />
                <p>{duration}</p>
              </div>
            )}
          </div>
        )}
      </div>
      {buyed ? (
        item.videos.map((item, index) => {
          const url = `/cursos/${urlData[0]}/${urlData[1]}/${item.url}`;
          return (
            <ModuleInside
              key={index}
              id={index}
              text={text ? text : "hola"}
              isToggled={isToggled}
              buyed={buyed}
              helpCenter={helpCenter}
              url={url}
              title={item.name}
              status={item.status}
              myCourse={myCourse}
            />
          );
        })
      ) : (
        <ModuleInside
          text={text ? text : "hola"}
          isToggled={isToggled}
          buyed={buyed}
          helpCenter={helpCenter}
        />
      )}
    </div>
  );
};
export default Module;
