import React from "react";

import "../../../assets/styles/components/Course.scss";
import Teacher from "../../../assets/static/images/img/profile-teach.png";
import Facebook from "../../../assets/static/images/svg/facebook-black.svg";
import Linkedin from "../../../assets/static/images/svg/linkedin-black.svg";
import Twitter from "../../../assets/static/images/svg/twitter-black.svg";
import Youtube from "../../../assets/static/images/svg/youtube-black.svg";

const CourseTeacherInfoVariant = (props) => {
  return (
    <div className={"buyed__teacher" + " " + props.onlyDesktop}>
      <div className="flex">
        <img
          className="buyed__teacher__photo"
          src={props.teacher.photo}
          alt="Foto del profesor"
        />
        <div className="buyed__teacher__inside">
          <h3>{props.teacher.name}</h3>
          <p>{props.teacher.profesion}</p>
          <div className="flex">
            <strong>Seguir:</strong>
            <div className="flex course__teach__socials ">
              <a href={`${props.teacher.facebook}`}>
                <img src={Linkedin} alt="Instagram" />
              </a>
              <a href={`${props.teacher.facebook}`}>
                <img src={Facebook} alt="Twitter" />
              </a>
              <a href={`${props.teacher.twitter}`}>
                <img src={Twitter} alt="Facebook" />
              </a>
              <a href={`${props.teacher.youtube}`}>
                <img src={Youtube} alt="LinkedIn" />
              </a>
            </div>
          </div>
          <h5 className="buyed__teacher__info">{props.teacher.description}</h5>
        </div>
      </div>
    </div>
  );
};
export default CourseTeacherInfoVariant;
