import React from "react";

import "../../../assets/styles/components/Course.scss";
import Human from "../../../assets/static/images/img/human-diploma.png";
import Star from "../../../assets/static/images/svg/star-black.svg";

const CourseCertificate = (props) => (
  <>
    {props.mobile ? (
      <div className={"course__certificate" + " " + props.onlyDesktop}>
        <div className="course__certificate__left">
          <img src={Star} alt="Icono de Estrella" className="course__certificate__star" />
          <h2>Obtenés un certificado al terminar el curso.</h2>
          <img
            className="course__certificate__img"
            src={Human}
            alt="Estudiante con su certificado"
          />
          <p>
            Lorem ipsum dolor sit amet, consecter adipiscing elit, sed diam
            nonummymagna aliquam erat.
          </p>
        </div>
      </div>
    ) : (
      <div className={"course__certificate flex" + " " + props.onlyDesktop}>
        <img
          className="course__certificate__img"
          src={Human}
          alt="Estudiante con su certificado"
        />
        <div className="course__certificate__left">
          <img src={Star} alt="Icono de Estrella" />
          <h2>Obtenés un certificado al terminar el curso.</h2>
          <p>
            Lorem ipsum dolor sit amet, consecter adipiscing elit, sed diam
            nonummymagna aliquam erat.
          </p>
        </div>
      </div>
    )}
  </>
);
export default CourseCertificate;
