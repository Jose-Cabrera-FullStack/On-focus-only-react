import React from "react";

import "../../assets/styles/components/Course.scss";

const OtherCourse = ({ progress }) => {
  const width = progress || 10;

  let number = Math.round(progress);

  return (
    <div className="buyed__progress__bar">
      <div
        className="buyed__progress__bar__completed"
        style={{ width: `${width}%` }}
      ></div>
      <h1>{number} %</h1>
    </div>
  );
};
export default OtherCourse;
