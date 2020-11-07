import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Utils/Breadcrumbs";
import SmallVideo from "../components/Visualization/SmallVideo";
import HeroCoursePlus from "../components/Course/Hero/HeroCoursePlus";
import InformationAboutThisCourse from "../components/Course/InformationCourse/InformationAboutThisCourse";
import WhatIncludeThisCourse from "../components/Course/AboutCourse/WhatIncludeThisCourse";
import IsThisCourseForMe from "../components/Course/AboutCourse/IsThisCourseForMe";
import ModuleList from "../components/Course/Module/ModuleList";
import RecomendationList from "../components/Course/RecomendationList";
import AboutTheTeacher from "../components/Course/AboutTheTeacher";
import HowWeTeach from "../components/Principal/HowWeTeach";
import NotFound from "../containers/NotFound";

import RectangleWithPriceAndDiscount from "../components/Course/RectangleWithPriceAndDiscount";

import LoadingPage from "../components/Utils/LoadingPage";

import { getCourseBySlug } from "../actions";

import "../assets/styles/App.scss";

const Course = (props) => {
  let grid = "grid-column-2--fix";

  const { slugcourse } = props.match.params;

  useEffect(() => {
    props.getCourseBySlug(slugcourse);
  }, {});
  const isCourse = Object.keys(props.course).length > 0;

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
  });
  return !isCourse ? (
    isLoading ? (
      <LoadingPage />
    ) : (
      <NotFound />
    )
  ) : (
    <div className="App">
      <Header history={props.history} />
      <Breadcrumbs
        onlyMobile={"display__screen__mobile__flex"}
        margin={"beadcrumbs__course"}
      />
      <SmallVideo
        onlyMobile={"visualization__mobile display__screen__mobile"}
        video_id={props.course.video_intro}
      />
      <HeroCoursePlus />
      <section>
        <div className="flex">
          <InformationAboutThisCourse course={props.course} />
          <RectangleWithPriceAndDiscount />
        </div>

        <WhatIncludeThisCourse datails={props.course.course_details_items} />
        <div className="flex">
          <div>
            <IsThisCourseForMe
              forMe={props.course.course_target_items}
              onlyDesktop={"display__screen__desktop"}
            />
            <ModuleList
              modules={props.course.modules}
              onlyDesktop={"display__screen__desktop"}
              infoHidden
            />
          </div>
          <RectangleWithPriceAndDiscount />
        </div>
        <RecomendationList
          onlyDesktop={"display__screen__desktop"}
          infoHidden
          testimonials={props.course.testimonials}
        />
        <div className="flex">
          <div className="discovery__box__info__in__course__width">
            <AboutTheTeacher
              onlyDesktop={"display__screen__desktop"}
              infoHidden
              teacher={props.course.teacher}
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

const mapStateToProps = (state) => {
  return {
    course: state.CourseSlug || {},
  };
};
const mapDispatchToProps = {
  getCourseBySlug,
};

export default connect(mapStateToProps, mapDispatchToProps)(Course);
