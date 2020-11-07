import React, { useState } from "react";
import { connect } from "react-redux";

import "../../assets/styles/components/CoursePlus.scss";
import InformationAboutCourse from "./InformationCourse/InformationAboutCourse";
import CourseAbout from "./AboutCourse/CourseAbout";
import CourseCertificate from "./AboutCourse/CourseCertificate";
import CourseTeacherInfoVariant from "./AboutCourse/CourseTeacherInfoVariant";
import BuyedCourse from "./Mobile/BuyedCourse";

import Modal from "../Utils/Modal";

import Classes from "./Mobile/Classes";
import Information from "./Mobile/Information";

const AboutThisCourse = (props) => {
  const { myCourse = {} } = props;
  const { Course = {} } = props;

  const [openCourse, setOpenCourse] = useState(false);

  const handleOpenCourse = () => {
    setOpenCourse(true);
  };

  const handleCloseCourse = () => {
    setOpenCourse(false);
  };

  const [openInformation, setOpenInformation] = useState(false);

  const handleOpenInformation = () => {
    setOpenInformation(true);
  };

  const handleCloseInformation = () => {
    setOpenInformation(false);
  };

  // console.log("Course:",Course)

  return (
    <div>
      <InformationAboutCourse
        width={"course__information__text__width"}
        onlyDesktop={"display__screen__desktop"}
      />
      <p className="buyed__text display__screen__desktop">
        {myCourse.about_this_course}
      </p>
      <CourseAbout
        title={"¿Qué incluye este curso?"}
        font={"buyed__font"}
        onlyDesktop={"display__screen__desktop"}
        myCourse={myCourse}
      />

      <CourseCertificate onlyDesktop={"display__screen__desktop"} />
      <p className="buyed__teacher__tittle display__screen__desktop">
        Sobre el profesor
      </p>
      <BuyedCourse
        onlyMobile={"display__screen__mobile"}
        description={"Están todos los modulos."}
        title={"Clases"}
        onClick={handleOpenCourse}
        classes
      />
      <Modal
        open={openCourse}
        handleClose={handleCloseCourse}
        body={
          <Classes
            onClick={handleCloseCourse}
            margin={"course__module__element--my-courses__mobile"}
          />
        }
      />

      <BuyedCourse
        onlyMobile={"display__screen__mobile"}
        description={"Está toda la información del curso."}
        title={"Sobre el curso"}
        onClick={handleOpenInformation}
        information
      />
      <Modal
        open={openInformation}
        handleClose={handleCloseInformation}
        body={<Information onClick={handleCloseInformation} />}
      />
      <CourseTeacherInfoVariant
        onlyDesktop={"display__screen__desktop"}
        teacher={myCourse.teacher}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myCourse: state.myCourse || {},
    Course: state.CourseSlug || {},
  };
};
export default connect(mapStateToProps, null)(AboutThisCourse);
