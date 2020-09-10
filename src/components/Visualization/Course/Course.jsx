import React, { useState } from "react";

import "../../../assets/styles/components/Visualization.scss";
import "../../../assets/styles/components/Course.scss";

import CourseInside from "./CourseInside";

import ArrowDown from "../../../assets/static/images/svg/arrow-down-gold.svg";
import CompleteIcon from "../../../assets/static/images/svg/icon-video-complete.svg";
import IncompleteIcon from "../../../assets/static/images/svg/icon-video-incomplete.svg";

const Course = ({ title, text, videos, path, position }) => {
  const [isToggle, setToggled] = useState(false);

  const changeToggle = () => setToggled(!isToggle);

  let videosComplete = [];
  let open = false;
  videos.map((item) => {
    if (item.status === true) videosComplete.push(item.status);
    if (item.url === path.params.video_id) open = true;
  });
  const isStarted = videosComplete.length > 0;
  return (
    <>
      <li
        className="visualization__sidebar__list slide-in-top"
        onClick={changeToggle}
      >
        <div className="visualization__sidebar__list__box  flex">
          <div className={position}></div>
          <img
            className="visualization__sidebar__status"
            src={isStarted ? CompleteIcon : IncompleteIcon}
            alt="Iconó del Estado del curso"
          />
          <div>
            <h5 className="visualization__sidebar__title">
              {title ? title : "Módulo 1 - 15 min"}
            </h5>
            <p className="visualization__sidebar__text">
              {text ? text : "Lorem ipsum dolor sit amet."}
            </p>
          </div>
          <img
            className={
              isToggle
                ? open
                  ? "visualization__sidebar__arrow"
                  : "visualization__sidebar__arrow visualization__sidebar__arrow--up arrow-rotation-up"
                : open
                ? "visualization__sidebar__arrow"
                : "visualization__sidebar__arrow arrow-rotation-down"
            }
            src={ArrowDown}
            alt="Flecha hacia arriba"
          />
        </div>
      </li>
      {isToggle ? (
        <>
          {videos.map((item, index) => {
            const last =
              index + 1 === videos.length
                ? item.status === false
                  ? "visualization__vertical__line visualization__vertical__line--inside--incomplete"
                  : "visualization__vertical__line visualization__vertical__line--last"
                : item.status === false
                ? "visualization__vertical__line visualization__vertical__line--inside--incomplete"
                : "visualization__vertical__line";
            return (
              <CourseInside
                key={index}
                title={item.name}
                status={item.status}
                url={item.url}
                path={path}
                last={last}
              />
            );
          })}
        </>
      ) : open ? (
        <>
          {videos.map((item, index) => {
            const last =
              index + 1 === videos.length
                ? item.status === false
                  ? "visualization__vertical__line visualization__vertical__line--inside--incomplete"
                  : "visualization__vertical__line visualization__vertical__line--last"
                : item.status === false
                ? "visualization__vertical__line visualization__vertical__line--inside--incomplete"
                : "visualization__vertical__line";
            return (
              <CourseInside
                key={index}
                title={item.name}
                status={item.status}
                url={item.url}
                path={path}
                last={last}
              />
            );
          })}
        </>
      ) : (
        ""
      )}
    </>
  );
};
export default Course;
