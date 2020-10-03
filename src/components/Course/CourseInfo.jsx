import React, { useState } from "react";
import { connect } from "react-redux";

import InformationAboutCourse from "./InformationAboutCourse";
import CourseAbout from "./AboutCourse/CourseAbout";
import RectangleWithPriceAndDiscount from "./RectangleWithPriceAndDiscount";

import CourseModule from "./CourseModule";
import RecomendationList from "./RecomendationList";
import WhatIncludeThisCourse from "./WhatIncludeThisCourse";
import IsThisCourseForMe from "./IsThisCourseForMe";
import CourseTeacher from "./CourseTeacher";
import HowWeTeach from "../Principal/HowWeTeach";

import Information from "../Course/InformationCourse/Information";
import SmallVideo from "../Visualization/SmallVideo";

import "../../assets/styles/components/CoursePlus.scss";

const CourseInfo = ({ category }) => {
  let grid = "grid-column-2--fix";
  const [isToggle, setIsToggle] = useState(false);
  const isToggleFalse = () => setIsToggle(!isToggle);
  return (
    <div className="course">
      <Information OnlyDesktop={"display__screen__desktop"} />
      <div className="flex">
        <SmallVideo
          OnlyDesktop={"display__screen__desktop"}
          video_id={category.video_intro}
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
          <div className="display__screen__mobile slide-in-top">
            <h1 className="course__info__title ">Información</h1>
            <InformationAboutCourse
              onlyMobile={"display__screen__mobile__without__flex"}
              width={"course__information__text__width"}
              logoMobile={"course__logo__mobile"}
              margin={"course__logo__mobile__margin"}
            />
            <CourseAbout />
            <WhatIncludeThisCourse onlyMobile />
            <IsThisCourseForMe />
            <CourseModule />
            <RecomendationList />
            <CourseTeacher margin={"discovery__box__info__mobile"} />
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
          <CourseAbout />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    category: state.category || {},
  };
};

export default connect(mapStateToProps, null)(CourseInfo);
