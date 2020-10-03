import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Utils/Breadcrumbs";
import SmallVideo from "../components/Visualization/SmallVideo";
import HeroCoursePlus from "../components/Course/HeroCoursePlus";
import CourseInfo from "../components/Course/CourseInfo";
import WhatIncludeThisCourse from "../components/Course/WhatIncludeThisCourse";
import IsThisCourseForMe from "../components/Course/IsThisCourseForMe";
import CourseModule from "../components/Course/CourseModule";
import RecomendationList from "../components/Course/RecomendationList";
import CourseTeacher from "../components/Course/CourseTeacher";
import HowWeTeach from "../components/Principal/HowWeTeach";
import NotFound from "../containers/NotFound";

import RectangleWithPriceAndDiscount from "../components/Course/RectangleWithPriceAndDiscount";

import slugify from "../Utils/slugChange";

import { getCourseCategory, getCourse, getAllCourse } from "../actions";

import "../assets/styles/App.scss";

const Course = (props) => {
  let grid = "grid-column-2--fix";

  const { slugcategory, slugcourse } = props.match.params;

  useEffect(() => {
    props.getAllCourse();
    props.getCourseCategory(slugify(slugcategory));
    props.getCourse(slugify(slugcourse));
  });
  const isCategory = Object.keys(props.category).length > 0;
  const isCourse = Object.keys(props.courseName).length > 0;

  return !isCategory || !isCourse ? (
    <NotFound />
  ) : (
    <div className="App">
      <Header history={props.history} />
      <Breadcrumbs
        onlyMobile={"display__screen__mobile__flex"}
        margin={"beadcrumbs__course"}
      />
      <SmallVideo
        onlyMobile={"visualization__mobile display__screen__mobile"}
        video_id={props.category.video_intro}
      />
      <HeroCoursePlus />
      <section>
        <div className="flex">
          <CourseInfo course={props.category} />
          <RectangleWithPriceAndDiscount />
        </div>

        <WhatIncludeThisCourse />
        <div className="flex">
          <div>
            <IsThisCourseForMe onlyDesktop={"display__screen__desktop"} />
            <CourseModule onlyDesktop={"display__screen__desktop"} infoHidden />
          </div>
          <RectangleWithPriceAndDiscount />
        </div>
        <RecomendationList
          onlyDesktop={"display__screen__desktop"}
          infoHidden
        />
        <div className="flex">
          <div className="discovery__box__info__in__course__width">
            <CourseTeacher
              onlyDesktop={"display__screen__desktop"}
              infoHidden
            />
            <HowWeTeach
              grid={grid}
              onlyDesktop={"display__screen__desktop"}
              infoHidden
            />
          </div>
          <RectangleWithPriceAndDiscount />
        </div>
      </section>
      <Footer />
    </div>
  );
};

Course.propTypes = {
  getCourseCategory: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    category: state.category || {},
    courseName: state.courseName || {},
    course: state.course || {},
  };
};
const mapDispatchToProps = {
  getCourseCategory,
  getCourse,
  getAllCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(Course);
