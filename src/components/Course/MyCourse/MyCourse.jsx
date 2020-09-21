import React from "react";
import { Link } from "react-router-dom";
import capitalizeFirstLetter from "../../../Utils/capitalizeFirstLetter";

import "../../../assets/styles/components/Course.scss";

import Class1 from "../../../assets/static/images/img/ui-design.png";

import ProgressBar from "../../Utils/ProgressBar";

import Button from "../../Utils/ButtonArrowRight";

const MyCourse = ({ progress, title, category, src, url, myCourseModule }) => {
  return (
    <div className="discovery__box slide-in-top">
      <div className="discovery__box__img">
        <img
          src={src ? src : Class1}
          className="discovery__box__img__class"
          alt="Imagen del Curso"
        />
      </div>
      <div className="discovery__box__info--my__course">
        <div className="discovery__box__info__padding">
          <h2 className="discovery__box__info__title course__plus__title">
            {title ? title : " Aprendé a ser mejor lider."}
          </h2>
          <div className="flex">
            <p className="discovery__box__info__name course__plus__sub__title">
              {category ? capitalizeFirstLetter(category) : "Marketing"}
            </p>
          </div>
          <ProgressBar myCourseModule={myCourseModule} progress={progress} />
          <div>
            <Link to={url ? url : "/cursos"}>
              <Button text={"Continuar"} margin={"btn__secundary--my-course"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyCourse;
