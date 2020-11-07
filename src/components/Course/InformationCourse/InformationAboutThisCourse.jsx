import React, { useState } from "react";
import { connect } from "react-redux";

import InformationAboutCourse from "../InformationCourse/InformationAboutCourse";
import CourseAbout from "../AboutCourse/CourseAbout";
import RectangleWithPriceAndDiscount from "../RectangleWithPriceAndDiscount";

import ModuleList from "../Module/ModuleList";
import RecomendationList from "../RecomendationList";
import WhatIncludeThisCourse from "../AboutCourse/WhatIncludeThisCourse";
import IsThisCourseForMe from "../AboutCourse/IsThisCourseForMe";
import AboutTheTeacher from "../AboutTheTeacher";
import HowWeTeach from "../../Principal/HowWeTeach";

import Information from "./Information";
import SmallVideo from "../../Visualization/SmallVideo";

import "../../../assets/styles/components/CoursePlus.scss";

const InformationAboutThisCourse = ({ course }) => {
  let grid = "grid-column-2--fix";
  const [isToggle, setIsToggle] = useState(false);
  const isToggleFalse = () => setIsToggle(!isToggle);
  return (
    <div className="course">
      <Information OnlyDesktop={"display__screen__desktop"} />
      <div className="flex">
        <SmallVideo
          OnlyDesktop={"display__screen__desktop"}
          video_id={course.video_intro}
        />
      </div>
      <div>
        <Information onlyMobile={"display__screen__mobile"} />
        <RectangleWithPriceAndDiscount onlyMobile />
        <h2
          onClick={isToggleFalse}
          className="course__hidden__information display__screen__mobile"
        >
          {isToggle ? "Ocultar" : "Mostrar"} información {isToggle ? "-" : "+"}
        </h2>
        {isToggle ? (
          <div className="display__screen__mobile display__screen__mobile--margin slide-in-top ">
            <h1 className="course__info__title ">Información</h1>
            <InformationAboutCourse
              onlyMobile={"display__screen__mobile__without__flex"}
              width={"course__information__text__width"}
              logoMobile={"course__logo__mobile"}
              margin={"course__logo__mobile__margin"}
            />
            <CourseAbout course={course}/>
            <WhatIncludeThisCourse onlyMobile datails={course.course_details_items}/>
            <IsThisCourseForMe forMe={course.course_target_items}/>
            <ModuleList modules={course.modules}/>
            <RecomendationList testimonials={course.testimonials}/>
            <AboutTheTeacher teacher={course.teacher} margin={"discovery__box__info__mobile"} />
            <HowWeTeach grid={grid} margin={"how__we__tech__mobile"} />
          </div>
        ) : (
          ""
        )}
        <div className="display__screen__desktop">
          <h1 className="course__info__title">Informacion</h1>
          <InformationAboutCourse
            onlyMobile={"display__screen__mobile__without__flex"}
            width={"course__information__text__width"}
            logoMobile={"course__logo__mobile"}
            margin={"course__logo__mobile__margin"}
          />
          <CourseAbout course={course}/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    course: state.CourseSlug || {},
  };
};

export default connect(mapStateToProps, null)(InformationAboutThisCourse);
