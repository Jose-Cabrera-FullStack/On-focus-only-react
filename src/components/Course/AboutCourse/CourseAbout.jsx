import React, { useState } from "react";

import "../../../assets/styles/components/CoursePlus.scss";

const CourseAbout = (props) => {
  const [isToggle, setIsToggle] = useState(false);
  const ClickSetIsToggle = () => setIsToggle(!isToggle);
  return (
    <div className={"course__about" + " " + props.onlyDesktop}>
      <h1 className={"course__info__title" + " " + props.font}>
        {props.title ? props.title : "Sobre este curso"}
      </h1>
      {props.myCourse ? (
        props.myCourse.course_details_items.map((item, index) => {
          return (
            <ul key={index}>
              <li key={index}>{item}</li>
            </ul>
          );
        })
      ) : (
        <p>{props.course.about_this_course}</p>
      )}
      {props.font ? (
        <div className="buyed__course__variant__text">
          <h4>¿Este curso es para mi?</h4>
          {props.myCourse ? (
            props.myCourse.course_target_items.length <= 2 ? (
              props.myCourse.course_target_items.map((item, index) => {
                return (
                  <ul key={index}>
                    <li key={index}>{item}</li>
                  </ul>
                );
              })
            ) : (
              <div className="buyed_see__more__box display__screen__desktop">
                {props.myCourse.course_target_items
                  .slice(0, 2)
                  .map((item, index) => {
                    return (
                      <ul key={index}>
                        <li key={index}>{item}</li>
                      </ul>
                    );
                  })}
                {isToggle
                  ? props.myCourse.course_target_items
                      .slice(2, props.myCourse.course_target_items.length)
                      .map((item, index) => {
                        return (
                          <ul key={index}>
                            <li key={index}>{item}</li>
                          </ul>
                        );
                      })
                  : ""}
                <i className="buyed_see__more" onClick={ClickSetIsToggle}>
                  Ver {isToggle ? "menos" : "más"} {isToggle ? "-" : "+"}
                </i>
              </div>
            )
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default CourseAbout;
