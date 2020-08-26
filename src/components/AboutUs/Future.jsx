import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

import "../../assets/styles/components/Teacher.scss";

import Logo from "../../assets/static/images/img/logo-about-us.png";

const Future = (props) => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = (visiblity) => {
    setVisibility(visiblity);
  };
  return (
    <VisibilitySensor
      partialVisibility
      offset={{ top: 200 }}
      onChange={onChange}
      active={!isVisible} 
    >
      <section
        className={
          isVisible
            ? "about__us__focus__future visible"
            : "about__us__focus__future"
        }
      >
        <div className="flex display__screen__mobile__without__flex">
          <img
            className="about__us__focus__future__img display__screen__desktop"
            src={Logo}
            alt="Logo de Onfocus"
          />
          <img
            className="display__screen__mobile"
            src={props.icon}
            alt="Logo de Onfocus"
          />
          <div>
            <h1 className="about__us__focus__future__title">
              On Focus es la plataforma que prepara a los emprendedores y
              profesionales del futuro.{" "}
            </h1>
            <p className="about__us__focus__future__text">
              Ut wisi enim ad minim veniam. Duis autem vel eum iriure dolor in
              hendrerit in vulputate velit. Ut wisi enim ad minim veniam. Duis
              autem vel eum iriure dolor in hendrerit in vulputate velit esse
              molestie consequat.
            </p>
          </div>
        </div>
      </section>
    </VisibilitySensor>
  );
};
export default Future;
