import React from "react";

import "../../assets/styles/components/Course.scss";

const ProgressBar = ({ progress, myCourseModule }) => {
  const width = progress || 10;

  let number = Math.round(progress);

  return (
    <div className="buyed__progress__bar">
      <div
        className={
          number === 100
            ? "buyed__progress__bar__completed"
            : "buyed__progress__bar__completed--incomplete"
        }
        style={{ width: `${width}%` }}
      ></div>
      <h1
        className={
          myCourseModule
            ? number === 100
              ? "buyed__progress__bar__number--my-course"
              : "buyed__progress__bar__number--my-course--incompleted"
            : number === 100
            ? "buyed__progress__bar__number--completed"
            : "buyed__progress__bar__number"
        }
      >
        {number} %
      </h1>
    </div>
  );
};
export default ProgressBar;
