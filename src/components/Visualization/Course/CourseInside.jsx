import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../../../assets/styles/components/Visualization.scss";
import "../../../assets/styles/components/Course.scss";

const CourseInside = ({ title, status, url, path }) => {
  console.log(status)
  return (
    <>
      {path.params.video_id === url ? (
        <div
          className={
            "visualization__sidebar__inside visualization__sidebar__inside--watching"
          }
        >
          <h5 className="visualization__sidebar__inside__title">
            {title ? title : "Video 1 - Lorem ipsum dolor sit amet."}
          </h5>
          <p className="visualization__sidebar__inside__text visualization__sidebar__inside__text--watching">
            {status === false ? "Falta por ver" : "Completa"}
          </p>
        </div>
      ) : (
          <Link className={"visualization__sidebar__inside"}
            to={`/cursos/${path.params.slugcategory}/${path.params.slugname}/${url}`}
          >
            <div className={"visualization__sidebar__inside"}>
              <h5 className="visualization__sidebar__inside__title">
                {title ? title : "Video 1 - Lorem ipsum dolor sit amet."}
              </h5>
              <p className="visualization__sidebar__inside__text">
                {status === false ? "Falta por ver" : "Completa"}
              </p>
            </div>
          </Link>
        )}
    </>
  );
};
export default CourseInside;
