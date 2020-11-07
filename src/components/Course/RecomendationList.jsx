import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../assets/styles/components/Course.scss";
import "../../assets/styles/components/AboutUs.scss";

import Recomendation from "./Recomendation/Recomendation";
import Arrows from "./Recomendation/Arrows";

const RecomendationList = (props) => {
  const text =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.";

  const [ValueX, setX] = useState(0);

  const goLeft = () => {
    ValueX === 0 ? setX(-100 * (props.testimonials.length - 3)) : setX(ValueX + 100);
  };

  const goRight = () => {
    ValueX === -100 * (props.testimonials.length - 3) ? setX(0) : setX(ValueX - 100);
  };
  
  return (
    <section
      className={
        props.onlyDesktop
          ? `course__recomendation ${props.onlyDesktop}`
          : "course__recomendation"
      }
    >
      <div className="course__recomendation__inside">
        <h5 className="course__recomendation__inside__title">
          Recomendaciones
        </h5>
        <div className="course__recomendation__inside__box slide slide--course">
          {props.testimonials.map((item, index) => {
            return (
              <div key={index} className="slider">
                <Recomendation
                  icon={item.profile_picture}
                  name={item.name}
                  text={item.testimonial}
                  ValueX={ValueX}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Arrows
        total={props.testimonials.length - 2}
        goRight={goRight}
        goLeft={goLeft}
        ValueX={ValueX}
      />
    </section>
  );
};
export default RecomendationList;
