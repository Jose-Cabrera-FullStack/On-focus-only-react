import React from "react";

import "../../../assets/styles/components/ShoppingCar.scss";

import ArrowRight from "../../../assets/static/images/svg/arrow-right-black.svg";
import ArrowLeft from "../../../assets/static/images/svg/arrow-left-black.svg";

const Arrows = (props) => {
  return (
    <div className="about__us__arrows none-second">
      <img
        className="about__us__arrow"
        src={ArrowRight}
        alt="Flecha a la derecha"
        onClick={props.goRight}
      />
      <img
        className="about__us__arrow"
        src={ArrowLeft}
        alt="Flecha a la izquierda"
        onClick={props.goLeft}
      />
    </div>
  );
};
export default Arrows;
