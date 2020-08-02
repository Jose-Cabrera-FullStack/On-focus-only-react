import React from "react";
import { findFirst } from "obj-traverse/lib/obj-traverse";

import "../../assets/styles/components/Course.scss";
import Button from "../../components/Utils/ButtonArrowRight";

import UI from "../../assets/static/images/img/buyed-image.png";

import ProgressBar from "../Utils/ProgressBar";

const CourseProgress = ({
  onlyDesktop,
  title,
  teacher,
  module,
  name,
  category,
  image
}) => {
  let urls = [];
  let totalVideoNum = 0;
  let totalVideoFinishNum = 0;
  let totalVideo = module.map((item) => item.videos);
  totalVideo.map((element) => {
    element.forEach((element) => {
      if (element.status === true) totalVideoFinishNum += 1;
      if (element.status === false) urls.push(element.url);
      totalVideoNum += 1;
    });
  });

  const url = `/cursos/${category}/${name}/${urls[0]}`;

  return (
    <section className="buyed__progress">
      <div className="flex">
        <div>
          <h1>{title ? title : "Aprendé a ser mejor lider."}</h1>
          <h4>Por {teacher ? teacher : "Juan Pablo Laco"}</h4>
          <ProgressBar progress={(totalVideoFinishNum / totalVideoNum) * 100} />
          <br />
          <br />
          <Button
            icon={"icon btn__play__img"}
            text={"Ver Lorem ipsum"}
            link={url}
          />
        </div>
        <div>
          <img
            className={"buyed__progress__img" + " " + onlyDesktop}
            src={image ? image : UI}
            alt="Foto del Curso Comprado"
          />
        </div>
      </div>
    </section>
  );
};
export default CourseProgress;
