import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

import "../../assets/styles/components/Teacher.scss";

import Human1 from "../../assets/static/images/img/teacher-1.png";
import Human2 from "../../assets/static/images/img/teacher-2.png";
import Human3 from "../../assets/static/images/img/teacher-3.png";
import Human4 from "../../assets/static/images/img/teacher-4.png";

const Points = (props) => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = (visiblity) => {
    setVisibility(visiblity);
  };

  return (
    <VisibilitySensor
      partialVisibility
      offset={{ top: 0 }}
      onChange={onChange}
      active={!isVisible}
    >
      <section className="teacher__points">
        <div
          className={
            (isVisible
              ? "how__we__tech__container visible"
              : "how__we__tech__container") +
            " " +
            props.grid
          }
        >
          <div className="how__we__tech__info">
            <figure>
              <img
                className="how__we__tech__info__img teacher__points__img--1"
                src={Human1}
                alt="human happy"
              />
            </figure>
            <h5 className="how__we__tech__info__title">
              Enseña una vez y gana para siempre.
            </h5>
            <p className="how__we__tech__info__text teacher__points__text">
              Obtendrás comisiones por las <br />
              ventas que haga el curso, para siempre.
            </p>
          </div>
          <div className="how__we__tech__info">
            <figure className="how__we__tech__info__figure">
              <img
                className="how__we__tech__info__img--2 teacher__points__img--2"
                src={Human2}
                alt="human happy"
              />
            </figure>
            <h5 className="how__we__tech__info__title">
              Tu enseña y nos encargamos del resto.
            </h5>
            <p className="how__we__tech__info__text teacher__points__text">
              On Focus se encarga de grabar, <br />
              producir tu curso y lanzarlo.
            </p>
          </div>
          <div className="how__we__tech__info">
            <figure className="how__we__tech__info__figure">
              <img
                className="how__we__tech__info__img teacher__points__img--3"
                src={Human3}
                alt="human happy"
              />
            </figure>
            <h5 className="how__we__tech__info__title">
              Consigue consultorías privadas.
            </h5>
            <p className="how__we__tech__info__text teacher__points__text">
              Los alumnos pueden contactarte para <br />
              contratar tus servicios de manera privada.
            </p>
          </div>
          <div className="how__we__tech__info">
            <figure className="how__we__tech__info__figure">
              <img
                className="how__we__tech__info__img teacher__points__img--4"
                src={Human4}
                alt="human happy"
              />
            </figure>
            <h5 className="how__we__tech__info__title">
              Inspira y transmite tu conocimiento a todo Hispanoamérica.
            </h5>
            <p className="how__we__tech__info__text teacher__points__text">
              Los cursos de On Focus son vistos por <br />
              estudiantes en más de 15 países.
            </p>
          </div>
        </div>
      </section>
    </VisibilitySensor>
  );
};
export default Points;
