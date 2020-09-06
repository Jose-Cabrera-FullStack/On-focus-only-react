import React, { useState } from "react";

import "../../../assets/styles/components/CoursePlus.scss";
import Course from "../../../assets/static/images/img/about-this-course.png";

const CourseAbout = (props) => {
  const [isToggle, setIsToggle] = useState(false);
  const ClickSetIsToggle = () => setIsToggle(!isToggle);

  return (
    <div className={"course__about" + " " + props.onlyDesktop}>
      <h1 className={"course__info__title" + " " + props.font}>
        {props.title ? props.title : "Sobre este curso"}
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam. Duis autem vel eum iriure dolor
        in hendrerit in vulpu tate velit esse molestie consequat.
      </p>
      <img
        className="course__about__img"
        src={Course}
        alt="Imagen sobre el curso"
      />
      {props.font ? (
        <div className="buyed__course__variant__text">
          <h4>¿Este curso es para mi?</h4>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod{" "}
            </li>
            <li> Ut wisi enim ad minim veniam... </li>
          </ul>
          <div className="buyed_see__more__box display__screen__desktop">
            <i className="buyed_see__more" onClick={ClickSetIsToggle}>
              Ver {isToggle ? "menos" : "más"} {isToggle ? "-" : "+"}
            </i>
            {isToggle ? (
              <ul>
                <li> Ut wisi enim ad minim veniam... </li>
                <li> Ut wisi enim ad minim veniam... </li>
                <li>more items</li>
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam.
        </p>
      )}
    </div>
  );
};
export default CourseAbout;
