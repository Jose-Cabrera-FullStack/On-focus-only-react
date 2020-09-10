import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Breadcrumbs from "../components/Utils/Breadcrumbs";

import CourseProgress from "../components/Course/CourseProgress";

import CourseAboutCourse from "../components/Course/CourseAboutCourse";

import AboutCourseAndClasses from "../components/Course/Select/AboutCourseAndClasses";
import Module from "../components/Course/Module/Module";
import NotFound from "../containers/NotFound";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { getMyCategory } from "../actions";

import "../assets/styles/App.scss";
import "../assets/styles/components/Buyed.scss";

import UI from "../assets/static/images/img/buyed-image.png";

const CourseBuyed = (props) => {
  const [isSwitch, setSwitch] = useState("");

  const AboutThisCourse = () => setSwitch("");

  const CourseClasses = () => setSwitch("Classes");

  const { slug } = props.match.params;
  const {
    teacher,
    category,
    students,
    description,
    duration,
    featured_image,
    title,
    name,
    module,
  } = props.myCourse;

  useEffect(() => {
    props.getMyCategory(slug);
  }, []);

  const isMyCourse = Object.keys(props.myCourse).length > 0;

  const InfoMethod = (isSwitch) => {
    switch (isSwitch) {
      case "Classes":
        return (
          <div>
            {props.myCourse.module.map((item, index) => {
              return (
                <Module
                  key={index}
                  buyed
                  id={index + 1}
                  text={"Datos sobre el curso"}
                  duration={"45 min"}
                  item={item}
                  urlData={[category, name]}
                />
              );
            })}
          </div>
        );
      default:
        return (
          <CourseAboutCourse
            students={students}
            description={description}
            duration={duration}
            teacher={teacher}
          />
        );
    }
  };

  return !isMyCourse ? (
    <NotFound />
  ) : (
    <div className="App">
      <Header history={props.history} />
      <img
        className="buyed__progress__img display__screen__mobile"
        src={UI}
        alt="Foto del Curso Comprado"
      />

      <div className="buyed">
        <Breadcrumbs
          onlyDesktop={"display__screen__desktop"}
          link={"/mis-cursos"}
        />
        <CourseProgress
          onlyDesktop={"display__screen__desktop"}
          title={title}
          teacher={teacher.name}
          module={module}
          name={name}
          category={category}
          image={featured_image}
        />

        <AboutCourseAndClasses
          isSwitch={isSwitch}
          methodAbout={AboutThisCourse}
          methodClasses={CourseClasses}
        />

        <hr className="buyed__bar__line display__screen__desktop" />

        {InfoMethod(isSwitch)}
      </div>
      <Footer onlyDesktop={"display__screen__desktop"} />
    </div>
  );
};

const mapDispatchToProps = {
  getMyCategory,
};

const mapStateToProps = (state) => {
  return {
    myCourse: state.myCourse || {},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseBuyed);
