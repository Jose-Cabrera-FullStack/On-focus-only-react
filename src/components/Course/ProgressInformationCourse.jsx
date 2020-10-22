import React from "react";

import "../../assets/styles/components/Course.scss";
import Button from "../Utils/ButtonArrowRight";

import UI from "../../assets/static/images/img/buyed-image.png";

import ProgressBar from "../Utils/ProgressBar";

const ProgressInformationCourse = ({
  onlyDesktop,
  title,
  teacher,
  modules,
  category,
  image,
  slug,
}) => {
  let urlsFalse = [];
  let urlsTrue = [];
  let totalVideoNum = 0;
  let totalVideoFinishNum = 0;
  let totalVideo = modules.map((item) => item.videos);
  console.log("totalVideo", totalVideo);
  totalVideo.map((element) => {
    // element.forEach((element) => {
    //   if (element.status === true) totalVideoFinishNum += 1;
    //   if (element.status === false) urlsFalse.push(element.url);
    //   if (element.status === true) urlsTrue.push(element.url);
    //   totalVideoNum += 1;
    // });
  });

  let url = "";

  if (urlsFalse.length < 1) {
    url = `/cursos/${category}/${slug}/${urlsTrue[0]}`;
  }
  if (urlsFalse.length > 1) {
    url = `/cursos/${category}/${slug}/${urlsFalse[0]}`;
  }

  return (
    <section className="buyed__progress">
      <div className="flex">
        <div>
          <h1 className="buyed__progress__title">
            {title ? title : "Aprendé a ser mejor lider."}
          </h1>
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
export default ProgressInformationCourse;
