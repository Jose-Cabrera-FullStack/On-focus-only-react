import React from "react";
import { Link } from "react-router-dom";

import "../../assets/styles/components/CoursePlus.scss";
import CourseInfoOnlyInfo from "../../components/Course/CourseInfoOnlyInfo";
import CourseAbout from "../../components/Course/AboutCourse/CourseAbout";
import CourseCertificate from "../../components/Course/AboutCourse/CourseCertificate";
import CourseTeacherInfoVariant from "../../components/Course/AboutCourse/CourseTeacherInfoVariant";
import BuyedCourse from "../../components/Course/Mobile/BuyedCourse";

const CourseAboutCourse = (props) => {
  return (
    <div>
      <CourseInfoOnlyInfo
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
      <p className="buyed_see__more display__screen__desktop">Ver más+</p>
      <CourseCertificate onlyDesktop={"display__screen__desktop"} />

      <p className="buyed__teacher__tittle display__screen__desktop">
        Sobre el profesor
      </p>

      <BuyedCourse onlyMobile={"display__screen__mobile"} />

      <BuyedCourse onlyMobile={"display__screen__mobile"} />

      <CourseTeacherInfoVariant
        onlyDesktop={"display__screen__desktop"}
        teacher={props.teacher}
      />
    </div>
  );
};
export default CourseAboutCourse;
