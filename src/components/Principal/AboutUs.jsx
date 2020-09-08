import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

import "../../assets/styles/components/AboutUs.scss";

import Teacher from "./Teachers/Teacher";
import Arrows from "./Teachers/Arrows";

const AboutUs = () => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = (visiblity) => {
    setVisibility(visiblity);
  };
  const text =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.";

  const [ValueX, setX] = useState(0);

  const goLeft = () => {
    ValueX === 0 ? setX(-100 * (sliderArr.length - 3)) : setX(ValueX + 100);
  };

  const goRight = () => {
    ValueX === -100 * (sliderArr.length - 3) ? setX(0) : setX(ValueX - 100);
  };

  let sliderArr = [
    <Teacher
      name={"Jose"}
      src={""}
      text={text}
      profession={"Emprendedor"}
      ValueX={ValueX}
    />,
    <Teacher
      name={"Maria"}
      src={""}
      text={text}
      profession={"Profesora"}
      ValueX={ValueX}
    />,
    <Teacher
      name={"Juan"}
      src={""}
      text={text}
      profession={"Desarrollador"}
      ValueX={ValueX}
    />,
    <Teacher
      name={"Pedro"}
      src={""}
      text={text}
      profession={"Técnico"}
      ValueX={ValueX}
    />,
    <Teacher
      name={"Camilo"}
      src={""}
      text={text}
      profession={"Físico"}
      ValueX={ValueX}
    />,
  ];

  return (
    <section
      className={
        isVisible ? "about__us none-second visible" : "about__us none-second"
      }
    >
      <h1 className="about__us__title">
        Ut wisi enim ad minim exerci tation ullamcorper.
      </h1>
      <VisibilitySensor
        partialVisibility
        offset={{ top: 600 }}
        onChange={onChange}
        active={!isVisible}
      >
        <div className="flex">
          <div className="slide">
            {sliderArr.map((item, index) => {
              return (
                <div key={index} className="slider">
                  {item}
                </div>
              );
            })}
          </div>
          <Arrows goRight={goRight} goLeft={goLeft} />
        </div>
      </VisibilitySensor>
    </section>
  );
};
export default AboutUs;
