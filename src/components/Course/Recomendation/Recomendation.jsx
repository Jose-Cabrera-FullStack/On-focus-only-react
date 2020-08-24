import React from "react";

import "../../../assets/styles/components/Course.scss";
import Perfil from "../../../assets/static/images/img/perfil-recomendation.png";

const Recomendation = ({ icon, name, text, ValueX }) => {
  return (
    <div style={{ transform: `translateX(${ValueX}%)` }}>
      <div className="flex">
        <img
          className="course__recomendation__inside__profile"
          src={icon ? icon : Perfil}
          alt="Perfil"
        />
        <h4 className="course__recomendation__inside__name">
          {name ? name : "Fernando Lorem Ipsum"}
        </h4>
      </div>
      <p className="course__recomendation__inside__text">{text}</p>
    </div>
  );
};
export default Recomendation;
