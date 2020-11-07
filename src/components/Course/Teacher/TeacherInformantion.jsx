import React from "react";

import "../../../assets/styles/components/Course.scss";
import Facebook from "../../../assets/static/images/svg/facebook-black.svg";
import Linkedin from "../../../assets/static/images/svg/linkedin-black.svg";
import Twitter from "../../../assets/static/images/svg/twitter-black.svg";
import Youtube from "../../../assets/static/images/svg/youtube-black.svg";

const TeacherInformantion = (props) => {
  return (
    <div>
      <div className={"flex" + " " + props.onlyMobile}>
        <img
          className="course__teach_img"
          src={props.teacher.profile_photo}
          alt="Foto del profesor"
        />
        <div className="course__teach">
          <h3>{props.teacher.full_name}</h3>
          <p>{props.teacher.title}</p>
          <div className="flex">
            <strong>Seguir:</strong>
            <div className="flex course__teach__socials">
              <a href={props.teacher.socials.instagram}><img src={Linkedin} alt="Instagram" /></a>
              <a href={props.teacher.socials.twitter}><img src={Facebook} alt="Twitter" /></a>
              <a href={props.teacher.socials.facebook}><img src={Twitter} alt="Facebook" /></a>
              <a href={props.teacher.socials.linkedin}><img src={Youtube} alt="LinkedIn" /></a>
              <a href={props.teacher.socials.youtube}><img src={Facebook} alt="Youtube" /></a>
            </div>
          </div>
        </div>
      </div>
      <p className="course__teach__info">{props.teacher.description}</p>
    </div>
  );
};
export default TeacherInformantion;
