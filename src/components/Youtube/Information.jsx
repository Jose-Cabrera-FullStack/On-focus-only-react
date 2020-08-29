import React from "react";

import "../../assets/styles/components/Podcast.scss";
import OtherCourse from "../Utils/OtherCourse";
import Img from "../../assets/static/images/img/course-youtube.png";

const Information = () => (
  <section className="podcast__information">
    <h1>Lorem ipsum dolor sit amet sed diam, amet sed diam nonummy.</h1>
    <p className="podcast__information__text">
      Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
      suscipit lobortis nisl ut aliquip ex ea commodo trud exerci tation
      ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
      Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
      molestie consequat, vel illum dolo augue duis dolore te feugait nulla
      facilisi.
    </p>
    <img
      className="podcast__information__img"
      src={Img}
      alt="Imagen del curso"
    />
    <p className="podcast__information__text">
      Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
      molestie consequat, vel illum dolo augue duis dolore te feugait nulla
      facilisi.
    </p>
    <br />
    <OtherCourse />
  </section>
);
export default Information;
