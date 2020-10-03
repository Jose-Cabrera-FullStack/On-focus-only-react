import React, { useState } from "react";

import "../../assets/styles/components/CoursePlus.scss";
import InformationAboutCourse from "../../components/Course/InformationAboutCourse";
import CourseAbout from "../../components/Course/AboutCourse/CourseAbout";
import CourseCertificate from "../../components/Course/AboutCourse/CourseCertificate";
import CourseTeacherInfoVariant from "../../components/Course/AboutCourse/CourseTeacherInfoVariant";
import BuyedCourse from "../../components/Course/Mobile/BuyedCourse";

import Modal from "../Utils/Modal";

import Classes from "./Mobile/Classes";
import Information from "./Mobile/Information";

const CourseAboutCourse = (props) => {
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

  return (
    <div>
      <InformationAboutCourse
        width={"course__information__text__width"}
        onlyDesktop={"display__screen__desktop"}
      />
      <p className="buyed__text display__screen__desktop">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam. Duis autem vel eum iriure dolor
        in hendrerit in vulate velit esse molestie consequat.
      </p>
      <CourseAbout
        title={props.title}
        font={"buyed__font"}
        onlyDesktop={"display__screen__desktop"}
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
        teacher={props.teacher}
      />
    </div>
  );
};
export default CourseAboutCourse;
