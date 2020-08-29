import React from "react";

import "../../assets/styles/components/Teacher.scss";
import Human from "../../assets/static/images/img/human-knowledge.png";

const Knowledge = () => (
  <section className="about__us__focus__knowledge">
    <div className="flex display__screen__mobile__without__flex">
      <img src={Human} alt="" />
      <h1 className="about__us__focus__knowledge__text">
        Dolor in hendrerit lorem sup in vulputate velit der esse molestie
        consequat.
      </h1>
    </div>
  </section>
);
export default Knowledge;
