import React from "react";

import "../../../assets/styles/components/Course.scss";

import formatHourMinute from "../../../Utils/formatHourMinute";

import Module from "./Module";

const ModuleList = (props) => {
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
          {props.modules.map((item, index) => (
            <li key={index}>
              <Module
                id={item.module_id}
                title={item.name}
                duration={formatHourMinute(item.total_duration)}
                text={item.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default ModuleList;
