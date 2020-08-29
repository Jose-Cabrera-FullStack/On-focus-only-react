import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../assets/styles/components/Utils.scss";
import Arrow from "../../assets/static/images/svg/arrow-right.svg";
import ArrowHover from "../../assets/static/images/svg/arrow-right-hover-button.svg";

const ButtonArrowRight = ({
  margin,
  icon,
  iconHover,
  text,
  background,
  width,
  onClick,
  link,
}) => {
  const [isHover, setIsHover] = useState(false);
  const changeIsHover = () => setIsHover(!isHover);
  return (
    <div>
      {link ? (
        <Link to={link} className="text-decoration">
          <button
            className={
              "btn__secundary btn__secundary--buy discovery__box__position" +
              " " +
              background +
              " " +
              margin +
              " " +
              width
            }
            onMouseEnter={changeIsHover}
            onMouseLeave={changeIsHover}
          >
            <div className="flex btn__arrow__buy">
              <span
                className={
                  icon
                    ? isHover
                      ? icon + " " + iconHover
                      : icon
                    : "icon btn__arrow__buy__img"
                }
                alt="Ícono de flecha a la derecha"
              ></span>
              <p>{text ? text : "Comprarlo ahora"}</p>
            </div>
          </button>
        </Link>
      ) : (
        <button
          onMouseEnter={changeIsHover}
          onMouseLeave={changeIsHover}
          onClick={onClick}
          className={
            "btn__secundary btn__secundary--buy discovery__box__position" +
            " " +
            background +
            " " +
            margin +
            " " +
            width
          }
        >
          <div className="flex btn__arrow__buy">
            <img
              className="btn__arrow__buy__img"
              src={isHover ? ArrowHover : Arrow}
              alt="Ícono de Felcha"
            />
            <p>{text ? text : "Comprarlo ahora"}</p>
          </div>
        </button>
      )}
    </div>
  );
};
export default ButtonArrowRight;
