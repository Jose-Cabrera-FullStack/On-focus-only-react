import React from "react";
import { connect } from "react-redux";

import "../../assets/styles/components/Visualization.scss";

import Breadcrumbs from "../Utils/Breadcrumbs";

import CoursesList from "../Visualization/Course/CoursesList";
import Video from "./Video/Video";

import ArrowLeft from "../../assets/static/images/svg/arrow-visualization.svg";
import ArrowLeftHover from "../../assets/static/images/svg/arrow-visualization-black-hover.svg";

const VisualizationCourse = (props) => {
  return (
    <section className="visualization">
      <div className="flex">
        <Breadcrumbs
          icon={ArrowLeft}
          iconHover={ArrowLeftHover}
          onlyMobile={"visualization__navbar"}
          link={`/mis-cursos/${props.url.params.slugname}`}
          margin={"visualization__navbar--visualization"}
          text={"Volver al curso"}
        />
        <h1 className="visualization__title display__screen__desktop">
          {props.videoName}
        </h1>
      </div>
      <h1 className="visualization__title display__screen__mobile">
        {props.videoName}
      </h1>

      <Video video={props.video} display={"display__screen__mobile"} />

      <div className="visualization__grid">
        <CoursesList url={props.url} />

        <Video video={props.video} display={"display__screen__desktop"} />
      </div>
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    videoName: state.videoName,
  };
};
export default connect(mapStateToProps, null)(VisualizationCourse);
