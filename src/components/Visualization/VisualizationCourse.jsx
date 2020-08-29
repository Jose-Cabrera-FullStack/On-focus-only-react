import React from "react";
import { Link } from "react-router-dom";

import "../../assets/styles/components/Visualization.scss";

import Breadcrumbs from "../Utils/Breadcrumbs";

import CoursesList from "../Visualization/Course/CoursesList";
import Video from "./Video/Video";

import ArrowLeft from "../../assets/static/images/svg/arrow-visualization.svg";
import ArrowLeftHover from "../../assets/static/images/svg/arrow-visualization-black-hover.svg";

const VisualizationCourse = (props) => {
  return (
    <section className="visualization">
      <Breadcrumbs
        icon={ArrowLeft}
        iconHover={ArrowLeftHover}
        onlyMobile={"visualization__navbar"}
        link={`/mis-cursos/${props.url.params.slugname}`}
      />

      <Video video={props.video} display={"display__screen__mobile"} />

      <div className="visualization__grid">
        <CoursesList url={props.url} />

        <Video video={props.video} display={"display__screen__desktop"} />
      </div>
    </section>
  );
};
export default VisualizationCourse;
