import React, { useState } from "react";

import "../../../assets/styles/components/ShoppingCar.scss";
import Course from "./Course";

const CourseList = ({
  course,
  onlyTree,
  onlyFour,
  currentPosts,
  setcoursePage,
}) => {
  return (
    <>
      {onlyTree ? (
        <>
          {course.slice(course.length - 3, course.length).map((item, index) => {
            let onlyTwoToSmallMonitor = 2;
            return (
              <div key={index}>
                <Course
                  courseInfo={item}
                  displayNone={
                    index === onlyTwoToSmallMonitor ? "shopping-none" : ""
                  }
                />
              </div>
            );
          })}
        </>
      ) : onlyFour ? (
        <>
          {course.slice(course.length - 4, course.length).map((item) => {
            return (
              <div key={item.course_id}>
                <Course courseInfo={item} principal />
              </div>
            );
          })}
        </>
      ) : (
        <>
          {currentPosts.map((item) => {
            setcoursePage(true);
            return (
              <div key={item.course_id}>
                <Course courseInfo={item} />
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
export default CourseList;
