import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../../assets/styles/components/ShoppingCar.scss";
import capitalizeFirstLetter from "../../../Utils/capitalizeFirstLetter";
import formatHourMinute from "../../../Utils/formatHourMinute";

import Shopping from "../../Utils/ShoppingCarSquare";

import Arrow from "../../../assets/static/images/svg/arrow-right.svg";
import ArrowHover from "../../../assets/static/images/svg/arrow-right-hover-button.svg";
import Promo from "../../../assets/static/images/svg/rectangle-promo.svg";
import User from "../../../assets/static/images/svg/user.svg";
import Reloj from "../../../assets/static/images/svg/reloj.svg";
import Play from "../../../assets/static/images/svg/icon-play-black.svg";

import slugify from "../../../Utils/slugChange";
import priceWithDiscount from "../../../Utils/priceWithDiscount";

const Course = ({ courseInfo, displayNone, principal }) => {
  const {
    featured_image,
    discount,
    name,
    category,
    teacher,
    students,
    price,
    duration,
    module,
  } = courseInfo;
  let totalPriceToPay = priceWithDiscount(price, discount);

  const [isHover, setIsHover] = useState(false);

  const changeIsHover = () => setIsHover(!isHover);
  return (
    <div className={"discovery__box slide-in-top" + " " + displayNone}>
      <div className="discovery__box__img">
        <div>
          <img
            className="discovery__box__price__off"
            src={Promo}
            alt="Precio"
          />
          <div className="discovery__box__price__off__letter">
            <p>{discount ? `${discount}%` : "30%"}OFF</p>
          </div>
        </div>

        <img
          src={featured_image}
          className="discovery__box__img__class"
          alt="Imagen del Curso"
        />
      </div>

      <div className="discovery__box__info__course">
        <div className="discovery__box__info__padding">
          <h2 className="discovery__box__info__title">
            {name ? capitalizeFirstLetter(name) : "Aprendé a ser mejor lider."}
          </h2>
          <div className="flex">
            <p className="discovery__box__info__name">
              {category ? capitalizeFirstLetter(category) : "Marketing"}
            </p>
            <i className="discovery__box__info__teach">
              {teacher
                ? `Por ${capitalizeFirstLetter(teacher)}`
                : "Por Juan Pablo Laco"}
            </i>
          </div>
          <div className="flex discovery__box__info--fix">
            <div className="flex">
              <img src={User} alt="user" />
              <p className="discovery__box__info__student">
                {students ? students : "150"} alumnos.
              </p>
            </div>
            {principal ? (
              ""
            ) : (
              <div className="flex">
                <img
                  src={Reloj}
                  alt="user"
                  className="discovery__box__info__hours__icon"
                />
                <p className="discovery__box__info__student">
                  {duration ? formatHourMinute(duration) : "150"}
                </p>
              </div>
            )}

            {principal ? (
              ""
            ) : (
              <div className="flex">
                <img
                  src={Play}
                  alt="user"
                  className="discovery__box__info__hours__icon"
                />
                <p className="discovery__box__info__student">
                  {module ? module : "150"} Modulos.
                </p>
              </div>
            )}
          </div>
          <div className="flex">
            <h2 className="discovery__box__info__price">
              AR$ {totalPriceToPay ? totalPriceToPay : "490"}
            </h2>
            <i className="discovery__box__info__price__before">
              Antes <strong>AR$ {price ? parseInt(price) : "699"}</strong>
            </i>
          </div>
          <div className="flex">
            <Link to={`/cursos/${slugify(category)}/${slugify(name)}`}>
              <button
                onMouseEnter={changeIsHover}
                onMouseLeave={changeIsHover}
                className="btn__secundary btn__secundary--buy btn__secundary--buy--course discovery__box__position"
              >
                <div className="flex btn__arrow__buy">
                  <img
                    className="btn__arrow__buy__img"
                    src={isHover ? ArrowHover : Arrow}
                    alt="Ícono de Flecha"
                  />
                  <p>Ver detalles</p>
                </div>
              </button>
            </Link>
            <Shopping course={courseInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Course;
