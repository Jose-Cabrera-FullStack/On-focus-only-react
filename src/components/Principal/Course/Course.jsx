import React from "react";
import { Link } from "react-router-dom";

import "../../../assets/styles/components/ShoppingCar.scss";
import capitalizeFirstLetter from "../../../Utils/capitalizeFirstLetter";

import Shopping from "../../Utils/ShoppingCarSquare";

import Promo from "../../../assets/static/images/svg/rectangle-promo.svg";
import User from "../../../assets/static/images/svg/user.svg";

const Course = ({
  img,
  priceOff,
  title,
  category,
  teacher,
  students,
  price,
  course,
  displayNone,
}) => {
  let priceWithDiscount = price - price * (priceOff / 100);

  console.log(displayNone);

  return (
    <div className={"discovery__box " + " " + displayNone}>
      <div className="discovery__box__img">
        <div>
          <img
            className="discovery__box__price__off"
            src={Promo}
            alt="Precio"
          />
          <div className="discovery__box__price__off__letter">
            <p>{priceOff ? `${priceOff}%` : "30%"}OFF</p>
          </div>
        </div>

        <img
          src={img}
          className="discovery__box__img__class"
          alt="Imagen del Curso"
        />
      </div>

      <div className="discovery__box__info__course">
        <div className="discovery__box__info__padding">
          <h2 className="discovery__box__info__title">
            {title
              ? capitalizeFirstLetter(title)
              : "Aprendé a ser mejor lider."}
          </h2>
          <div className="flex">
            <p className="discovery__box__info__name">
              {category ? capitalizeFirstLetter(category) : "Marketing"}
            </p>
            <i className="discovery__box__info__teach">
              {teacher ? capitalizeFirstLetter(teacher) : "Por Juan Pablo Laco"}
            </i>
          </div>
          <div className="flex discovery__box__info--fix">
            <img src={User} alt="user" />
            <p className="discovery__box__info__student">
              {students ? students : "150"} alumnos
            </p>
          </div>
          <div className="flex">
            <h2 className="discovery__box__info__price">
              AR$ {priceWithDiscount ? parseInt(priceWithDiscount) : "490"}
            </h2>
            <i className="discovery__box__info__price__before">
              Antes <strong>AR$ {price ? parseInt(price) : "699"}</strong>
            </i>
          </div>
          <div className="flex">
            <Link to={`/cursos/${category}`}>
              <button className="btn__secundary btn__secundary--buy discovery__box__position">
                <div className="flex btn__arrow__buy">
                  <span
                    className="icon btn__arrow__buy__img"
                    alt="Ícono de flecha a la derecha"
                  ></span>
                  <p>Comprarlo ahora</p>
                </div>
              </button>
            </Link>
            <Shopping course={course} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Course;
