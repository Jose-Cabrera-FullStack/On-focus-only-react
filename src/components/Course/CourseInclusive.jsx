import React from "react";

import "../../assets/styles/components/Course.scss";

import Human from "../../assets/static/images/img/human-diploma.png";

const CourseInclusive = () => (
  <section className="course__inclusive none-second">
    <div className="flex">
      <div className="course__inclusive__inside">
        <h1>¿Qué incluye este curso?</h1>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Ebook con resumen de la clase.</li>
          <li>Documento descargable lorem ipsum.</li>
          <li>Y además...</li>
        </ul>

        <h2>Obtenés un certificado al terminar el curso.</h2>

        <p>
          <a className="course__inclusive__certificate" href="">
            {" "}
            Certificado Oficial{" "}
          </a>
          dolor sit amet, consecter adipiscing elit, sed diam nonummymagna
          aliquam erat.
        </p>
      </div>
      <img className="course__inclusive__diploma" src={Human} alt="" />
    </div>
  </section>
);
export default CourseInclusive;
