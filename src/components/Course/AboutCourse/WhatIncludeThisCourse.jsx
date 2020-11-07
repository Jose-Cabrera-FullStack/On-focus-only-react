import React from "react";

import "../../../assets/styles/components/Course.scss";

import Human from "../../../assets/static/images/img/human-diploma.png";

const WhatIncludeThisCourse = (props) => {
  return (
    <section
      className={`course__inclusive ${props.onlyMobile ? "" : "none-second"}`}
    >
      <div className={props.onlyMobile ? "" : "flex"}>
        <div className="course__inclusive__inside">
          <h1>¿Qué incluye este curso?</h1>
          <ul>
            {props.datails.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="display__screen__desktop">
            Obtenés un certificado al terminar el curso.
          </h2>

          <p className="display__screen__desktop">
            <a className="course__inclusive__certificate" href="">
              {" "}
              Certificado Oficial{" "}
            </a>
            dolor sit amet, consecter adipiscing elit, sed diam nonummymagna
            aliquam erat.
          </p>
        </div>
        <img
          className={
            props.onlyMobile ? "display-none" : "course__inclusive__diploma"
          }
          src={Human}
          alt=""
        />
      </div>
    </section>
  );
};
export default WhatIncludeThisCourse;
