import React from "react";
import { connect } from "react-redux";

import "../../../assets/styles/components/CoursePlus.scss";
import formatHourMinute from "../../../Utils/formatHourMinute";

import Perfil from "../../../assets/static/images/svg/perfil.svg";
import Reloj from "../../../assets/static/images/svg/reloj.svg";
import Media from "../../../assets/static/images/svg/media.svg";
import Check from "../../../assets/static/images/svg/check.svg";
import Calendary from "../../../assets/static/images/svg/calendary.svg";

const InformationAboutCourse = (props) => {
  const category = props.category;
  const myCourse = props.myCourse;
  return (
    <div className={"course__information" + " " + props.onlyDesktop}>
      <div className={"flex" + " " + props.onlyMobile}>
        <div className={"flex" + " " + props.margin}>
          <img className={props.logoMobile} src={Perfil} alt="perfil" />
          <p
            className={
              props.width
                ? "course__information__students--fix"
                : "course__information__students"
            }
          >
            {myCourse.total_students ? myCourse.total_students : category.total_students} alumnos.
          </p>
        </div>
        <div className={"flex" + " " + props.margin}>
          <img className={props.logoMobile} src={Reloj} alt="perfil" />
          <p className={"course__information__text" + " " + props.width}>
            Duración del curso:{" "}
            {myCourse.total_duration
              ? formatHourMinute(myCourse.total_duration)
              : formatHourMinute(props.category.total_duration)}{" "}
          </p>
        </div>
        <div className={"flex" + " " + props.margin}>
          <img className={props.logoMobile} src={Media} alt="perfil" />
          <p
            className={
              "course__information__text course__information__students--fix" +
              " " +
              props.width
            }
          >
            Cantidad de módulos:{" "}
            {myCourse.total_modules ? myCourse.total_modules : category.total_modules}.
          </p>
        </div>
      </div>
      <div className={"flex" + " " + props.onlyMobile}>
        <div className={"flex" + " " + props.margin}>
          <img className={props.logoMobile} src={Check} alt="perfil" />
          <p className={"course__information__text" + " " + props.width}>
            Empezás y terminás cuando querés.
          </p>
        </div>
        <div className={"flex" + " " + props.margin}>
          <img className={props.logoMobile} src={Calendary} alt="perfil" />
          <p className={"course__information__text" + " " + props.width}>
            Hacelo las veces que quieras.
          </p>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    category: state.CourseSlug || {},
    myCourse: state.myCourse || {},
  };
};
export default connect(mapStateToProps, null)(InformationAboutCourse);
