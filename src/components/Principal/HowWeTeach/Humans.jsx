import React from "react";

import "../../../assets/styles/components/HowWeTeach.scss";

import Human1 from "../../../assets/static/images/img/human-happy.png";
import Human2 from "../../../assets/static/images/img/human-happy-2.png";
import Human3 from "../../../assets/static/images/img/human-happy-3.png";
import Human4 from "../../../assets/static/images/img/human-happy-4.png";
import Human5 from "../../../assets/static/images/img/human-happy-5.png";
import Human6 from "../../../assets/static/images/img/human-happy-6.png";

import Human from "./Human";

const Humans = ({ title, src, imgClass, text }) => {
  return (
    <>
      <Human
        title={"100% interactivo."}
        text={
          "Nuestros cursos son diseñados y filmados para que aprender sea divertido."
        }
        src={Human1}
      />
      <Human
        title={"Aprende a tu ritmo"}
        text={"Estudia desde tu casa o cualquier lugar y maneja tus tiempos."}
        src={Human2}
        imgClass={"how__we__tech__info__img--2"}
      />
      <Human
        title={"Sin limites."}
        text={"Una vez que comprás un curso, podés verlo indefinidamente."}
        src={Human3}
      />
      <Human
        title={"Aplica lo que aprendes."}
        text={"Seleccionamos temas que son claves para el mundo de hoy."}
        src={Human4}
      />
      <Human
        title={"Obten tu diploma."}
        text={
          "Al terminar un curso obtendrás un certificado digital que certifica el curso."
        }
        src={Human5}
      />
      <Human
        title={"Contenido exclusivo."}
        text={
          "Seleccionamos temas que no vas a encontrar en Youtube u otras plataformas."
        }
        src={Human6}
      />
    </>
  );
};
export default Humans;
