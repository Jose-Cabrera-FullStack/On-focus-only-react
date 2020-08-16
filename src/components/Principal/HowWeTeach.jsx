import React, { useState } from "react";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";

import "../../assets/styles/components/HowWeTeach.scss";

import Human1 from "../../assets/static/images/img/human-happy.png";
import Human2 from "../../assets/static/images/img/human-happy-2.png";
import Human3 from "../../assets/static/images/img/human-happy-3.png";
import Human4 from "../../assets/static/images/img/human-happy-4.png";
import Human5 from "../../assets/static/images/img/human-happy-5.png";
import Human6 from "../../assets/static/images/img/human-happy-6.png";

const HowWeTeach = (props) => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = (visiblity) => {
    setVisibility(visiblity);
  };
  return (
    <section
      className={
        props.onlyDesktop
          ? `how__we__tech ${props.onlyDesktop}`
          : "how__we__tech"
      }
    >
      <h1 className="how__we__tech__title">
        Ut wisi enim ad minim exerci tation ullamcorper.
      </h1>
      <VisibilitySensor
        partialVisibility
        offset={{ top: 200 }}
        onChange={onChange}
      >
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
                className="how__we__tech__info__img"
                src={Human1}
                alt="human happy"
              />
            </figure>
            <h5 className="how__we__tech__info__title">100% interactivo.</h5>
            <p className="how__we__tech__info__text">
              Nuestros cursos son diseñados y filmados para que aprender sea
              divertido.
            </p>
          </div>
          <div className="how__we__tech__info">
            <figure className="how__we__tech__info__figure">
              <img
                className="how__we__tech__info__img--2"
                src={Human2}
                alt="human happy"
              />
            </figure>
            <h5 className="how__we__tech__info__title">Aprende a tu ritmo</h5>
            <p className="how__we__tech__info__text">
              Estudia desde tu casa o cualquier lugar y maneja tus tiempos.
            </p>
          </div>
          <div className="how__we__tech__info">
            <figure className="how__we__tech__info__figure">
              <img
                className="how__we__tech__info__img"
                src={Human3}
                alt="human happy"
              />
            </figure>
            <h5 className="how__we__tech__info__title">Sin limites</h5>
            <p className="how__we__tech__info__text">
              Una vez que comprás un curso, podés verlo indefinidamente.
            </p>
          </div>
          <div className="how__we__tech__info">
            <figure className="how__we__tech__info__figure">
              <img
                className="how__we__tech__info__img"
                src={Human4}
                alt="human happy"
              />
            </figure>
            <h5 className="how__we__tech__info__title">
              Aplica lo que aprendes.
            </h5>
            <p className="how__we__tech__info__text">
              Seleccionamos temas que son claves para el mundo de hoy.
            </p>
          </div>
          <div className="how__we__tech__info">
            <figure className="how__we__tech__info__figure">
              <img
                className="how__we__tech__info__img"
                src={Human5}
                alt="human happy"
              />
            </figure>
            <h5 className="how__we__tech__info__title">Obten tu diploma</h5>
            <p className="how__we__tech__info__text">
              Al terminar un curso obtendrás un certificado digital que
              certifica el curso.
            </p>
          </div>
          <div className="how__we__tech__info">
            <figure className="how__we__tech__info__figure">
              <img
                className="how__we__tech__info__img"
                src={Human6}
                alt="human happy"
              />
            </figure>
            <h5 className="how__we__tech__info__title">Contenido exclusivo.</h5>
            <p className="how__we__tech__info__text">
              Seleccionamos temas que no vas a encontrar en Youtube u otras
              plataformas.
            </p>
          </div>
        </div>
      </VisibilitySensor>
    </section>
  );
};
export default HowWeTeach;
