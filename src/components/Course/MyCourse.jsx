import React, { useState } from "react";

import "../../assets/styles/components/CoursePlus.scss";

import AllCourses from "./MyCourse/AllCourses";
import InProgress from "./MyCourse/InProgress";
import Finish from "./MyCourse/Finish";
import Menu from "./MyCourse/Menu";

const MyCourse = () => {
  const [isSwitch, setSwitch] = useState("");

  const AllCourse = () => setSwitch("");

  const InProgressCourses = () => setSwitch("En curso");

  const FinishCourses = () => setSwitch("Finalizados");

  const Courses = (isSwitch) => {
    switch (isSwitch) {
      case "En curso":
        return <InProgress />;
      case "Finalizados":
        return <Finish />;
      default:
        return <AllCourses />;
    }
  };

  return (
    <section className="my-course">
      <Menu
        isSwitch={isSwitch}
        All={AllCourse}
        Progress={InProgressCourses}
        Finish={FinishCourses}
      />

      <div className="my-course__individual">{Courses(isSwitch)}</div>
    </section>
  );
};
export default MyCourse;
