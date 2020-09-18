import React from "react";
import { Link } from "react-router-dom";

import "../../assets/styles/components/Course.scss";

import Module from "./Module/Module";

const CourseModule = (props) => {
  return (
    <section
      className={
        props.onlyDesktop
          ? `course__module ${props.onlyDesktop} `
          : "course__module"
      }
    >
      <h2 className="course__info__title">Módulo del curso</h2>
      <div>
        <ul>
          <li>
            <Module
              id={"1"}
              title={"Introducción a Marketing"}
              duration={"4:20"}
              text={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam... "
              }
            />
          </li>
          <li>
            <Module
              id={"2"}
              title={"Introducción a Marketing"}
              duration={"3:00"}
              text={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam... "
              }
            />
          </li>
          <li>
            <Module
              id={"3"}
              title={"Introducción a Marketing"}
              duration={"6:50"}
              text={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam... "
              }
            />
          </li>
          <li>
            <Module
              id={"4"}
              title={"Introducción a Marketing"}
              duration={"10:09"}
              text={
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam... "
              }
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
export default CourseModule;
