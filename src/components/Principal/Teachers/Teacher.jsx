import React from "react";

import "../../../assets/styles/components/ShoppingCar.scss";
import Comillas from "../../../assets/static/images/svg/comillas.svg";
import Perfil from "../../../assets/static/images/img/perfil.png";

const Teacher = ({ text, display, name, ValueX, profession, src }) => {
  return (
    <div
      className={"about__us__box" + " " + display}
      style={{ transform: `translateX(${ValueX}%)` }}
    >
      <div className="about__us__box__inside">
        <img src={src ? src : Perfil} alt="perfil" />
        <h2 className="about__us__box__inside__name">
          {name ? name : "Fernando Lorem Ipsum"}
        </h2>
        <i className="about__us__box__inside__profesion">
          {profession ? profession : "Emprendedor"}
        </i>
        <br />
        <br />
        <img src={Comillas} alt="comillas" />
        <p className="about__us__box__inside__text">{text}</p>
      </div>
    </div>
  );
};
export default Teacher;
