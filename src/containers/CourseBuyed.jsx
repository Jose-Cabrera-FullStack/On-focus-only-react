import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Breadcrumbs from "../components/Utils/Breadcrumbs";

import ProgressInformationCourse from "../components/Course/ProgressInformationCourse";

import AboutThisCourse from "../components/Course/AboutThisCourse";

import AboutCourseAndClasses from "../components/Course/Select/AboutCourseAndClasses";
import Module from "../components/Course/Module/Module";
import NotFound from "../containers/NotFound";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { getMyCourseBySlug } from "../actions";

import "../assets/styles/App.scss";
import "../assets/styles/components/Buyed.scss";

import UI from "../assets/static/images/img/buyed-image.png";

const CourseBuyed = (props) => {
  const [isSwitch, setSwitch] = useState("");

  const AboutThisCourseInformation = () => setSwitch("");
  const CourseClasses = () => setSwitch("Classes");
  
  const { slug } = props.match.params;
  const { token } = props.user.data;
  const {
    category,
    modules,
    slug: slg,
    teacher,
    featured_image,
    title,
  } = props.myCourse;
  
  useEffect(() => {
    props.getMyCourseBySlug(token, slug);
  }, []);

  const isMyCourse = Object.keys(props.myCourse).length > 0;

  const InfoMethod = (isSwitch) => {
    switch (isSwitch) {
      case "Classes":
        return (
          <div>
            {modules.map((item, index) => {
              return (
                <Module
                  key={index}
                  buyed
                  id={index + 1}
                  text={"Datos sobre el curso"}
                  duration={"45 min"}
                  item={item}
                  urlData={[category, slg]}
                />
              );
            })}
          </div>
        );
      default:
        return <AboutThisCourse />;
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
        <ProgressInformationCourse
          onlyDesktop={"display__screen__desktop"}
          title={title}
          teacher={teacher.full_name}
          modules={modules}
          slug={slg}
          category={category}
          image={featured_image}
        />

        <AboutCourseAndClasses
          isSwitch={isSwitch}
          methodAbout={AboutThisCourseInformation}
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
  getMyCourseBySlug,
};

const mapStateToProps = (state) => {
  return {
    myCourse: state.myCourse || {},
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseBuyed);
