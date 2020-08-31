import React from "react";

import "../../assets/styles/components/Teacher.scss";
import Button from "../Utils/ButtonArrowRight";

import Hero from "../../assets/static/images/img/hero-teacher-down.png";

const HeroDown = () => (
  <section className="teacher__course">
    <div className="flex display__screen__desktop">
      <img src={Hero} alt="" />
      <h1>Lorem ipsum dolor sit amet dolor sit, lorem ipsum dolor sit. </h1>
      <Button
        text={"Quiero hacer un curso"}
        icon={"btn__arrow__gold"}
        iconHover={"btn__arrow__white"}
        link={"/contactanos"}
        margin={"btn__secundary--about__us"}
      />
    </div>
    <div className="display__screen__mobile">
      <div className="flex">
        <img src={Hero} alt="Imagen de Estudiante" />
        <div className="teacher__course__mobile">
          <h1>Lorem ipsum dolor sit amet dolor sit, lorem ipsum dolor sit. </h1>
          <Button
            text={"Contactar"}
            icon={"btn__arrow__gold"}
            iconHover={"btn__arrow__white"}
            link={"/contactanos"}
            margin={"btn__secundary--about__us"}
          />
        </div>
      </div>
    </div>
  </section>
);
export default HeroDown;
