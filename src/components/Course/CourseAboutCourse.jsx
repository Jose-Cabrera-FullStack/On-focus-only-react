import React, { useState } from "react";

import "../../assets/styles/components/CoursePlus.scss";
import CourseInfoOnlyInfo from "../../components/Course/CourseInfoOnlyInfo";
import CourseAbout from "../../components/Course/AboutCourse/CourseAbout";
import CourseCertificate from "../../components/Course/AboutCourse/CourseCertificate";
import CourseTeacherInfoVariant from "../../components/Course/AboutCourse/CourseTeacherInfoVariant";
import BuyedCourse from "../../components/Course/Mobile/BuyedCourse";

import Classes from "./Mobile/Classes";
import Information from "./Mobile/Information";

const CourseAboutCourse = (props) => {
  const [isClasses, setIsClasses] = useState(false);
  const ClickSetIsClasses = () => setIsClasses(!isClasses);

  const [isInformation, setIsInformation] = useState(false);
  const ClickSetIsInformation = () => setIsInformation(!isInformation);

  const [isToggle, setIsToggle] = useState(false);
  const ClickSetIsToggle = () => setIsToggle(!isToggle);

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
      <p
        className="buyed_see__more display__screen__desktop"
        onClick={ClickSetIsToggle}
      >
        Ver {isToggle ? "menos":"más"} {isToggle ? "-" : "+"}
      </p>
      {isToggle ? <p>more items</p> : ""}
      <CourseCertificate onlyDesktop={"display__screen__desktop"} />
      <p className="buyed__teacher__tittle display__screen__desktop">
        Sobre el profesor
      </p>
      <BuyedCourse
        onlyMobile={"display__screen__mobile"}
        description={"Están todos los modulos."}
        title={"Clases"}
        onClick={ClickSetIsClasses}
        classes
      />

      {isClasses ? <Classes onClick={ClickSetIsClasses} /> : ""}

      <BuyedCourse
        onlyMobile={"display__screen__mobile"}
        description={"Está toda la información de este curso."}
        title={"Sobre el curso"}
        onClick={ClickSetIsInformation}
        information
      />
      {isInformation ? <Information onClick={ClickSetIsInformation} /> : ""}
      <CourseTeacherInfoVariant
        onlyDesktop={"display__screen__desktop"}
        teacher={props.teacher}
      />
    </div>
  );
};
export default CourseAboutCourse;
