import React from "react";

import "../../../assets/styles/components/Course.scss";
import Teacher from "../../../assets/static/images/img/profile-teach.png";
import Facebook from "../../../assets/static/images/svg/facebook-black.svg";
import Instagram from "../../../assets/static/images/svg/instagram-black.svg";
import Linkedin from "../../../assets/static/images/svg/linkedin-black.svg";
import Twitter from "../../../assets/static/images/svg/twitter-black.svg";
import Youtube from "../../../assets/static/images/svg/youtube-black.svg";

const CourseTeacherInfoVariant = (props) => {
  return (
    <div className={"buyed__teacher" + " " + props.onlyDesktop}>
      <div className="flex">
        <img
          className="buyed__teacher__photo"
          src={
            props.teacher.profile_photo ? props.teacher.profile_photo : Teacher
          }
          alt="Foto del profesor"
        />
        <div className="buyed__teacher__inside">
          <h3>{props.teacher.full_name}</h3>
          <p>{props.teacher.title}</p>
          <div className="flex">
            <strong>Seguir:</strong>
            <div className="flex course__teach__socials ">
              {props.teacher.socials.instagram ? (
                <a href={`${props.teacher.socials.instagram}`}>
                  <img src={Instagram} alt="Instagram" />
                </a>
              ) : (
                ""
              )}
              {props.teacher.socials.facebook ? (
                <a href={`${props.teacher.socials.facebook}`}>
                  <img src={Facebook} alt="Facebook" />
                </a>
              ) : (
                ""
              )}
              {props.teacher.socials.twitter ? (
                <a href={`${props.teacher.socials.twitter}`}>
                  <img src={Twitter} alt="Twitter" />
                </a>
              ) : (
                ""
              )}
              {props.teacher.socials.youtube ? (
                <a href={`${props.teacher.socials.youtube}`}>
                  <img src={Youtube} alt="Youtube" />
                </a>
              ) : (
                ""
              )}
              {props.teacher.socials.linkedin ? (
                <a href={`${props.teacher.socials.linkedin}`}>
                  <img src={Linkedin} alt="Linkedin" />
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
          <h5 className="buyed__teacher__info">{props.teacher.description}</h5>
        </div>
      </div>
    </div>
  );
};
export default CourseTeacherInfoVariant;
