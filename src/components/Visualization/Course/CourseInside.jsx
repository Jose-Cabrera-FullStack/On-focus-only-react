import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../../../assets/styles/components/Visualization.scss";
import "../../../assets/styles/components/Course.scss";

import { getMyVideoName } from "../../../actions";

import CompleteIcon from "../../../assets/static/images/svg/icon-video-complete.svg";
import IncompleteIcon from "../../../assets/static/images/svg/icon-video-incomplete.svg";
import WatchingIcon from "../../../assets/static/images/svg/icon-video-watching.svg";

const CourseInside = ({ title, status, url, path, last, getMyVideoName }) => {
  if (path.params.video_id === url) {
    useEffect(() => {
      getMyVideoName(title);
    }, []);
  }
  return (
    <>
      {path.params.video_id === url ? (
        <div
          className={
            "visualization__sidebar__inside visualization__sidebar__inside--watching slide-in-top"
          }
        >
          <div className={last}></div>
          <img
            className="visualization__sidebar__inside__status"
            src={status === false ? WatchingIcon : CompleteIcon}
            alt="Icono del estado del curso"
          />
          <h5 className="visualization__sidebar__inside__title">
            {title ? title : "Video 1 - Lorem ipsum dolor sit amet."}
          </h5>
          <p className="visualization__sidebar__inside__text visualization__sidebar__inside__text--watching">
            {status === false ? "Falta por ver" : "Completa"}
          </p>
        </div>
      ) : (
        <Link
          className={"visualization__sidebar__inside "}
          to={`/cursos/${path.params.slugcategory}/${path.params.slugname}/${url}`}
        >
          <div>
            <div className={"visualization__sidebar__inside slide-in-top"}>
              <div className={last}></div>
              <img
                className="visualization__sidebar__inside__status"
                src={status === false ? IncompleteIcon : CompleteIcon}
                alt="Icono del estado del curso"
              />
              <h5 className="visualization__sidebar__inside__title">
                {title ? title : "Video 1 - Lorem ipsum dolor sit amet."}
              </h5>
              <p className="visualization__sidebar__inside__text">
                {status === false ? "Falta por ver" : "Completa"}
              </p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};
const mapDispatchToProps = {
  getMyVideoName,
};
export default connect(null, mapDispatchToProps)(CourseInside);
