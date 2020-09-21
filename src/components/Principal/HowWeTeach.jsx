import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

import "../../assets/styles/components/HowWeTeach.scss";

import Humans from "./HowWeTeach/Humans";

const HowWeTeach = (props) => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = (visiblity) => {
    setVisibility(visiblity);
  };
  return (
    <section
      className={
        props.onlyDesktop
          ? `how__we__tech ${props.onlyDesktop}`
          : `how__we__tech ${props.margin}`
      }
    >
      <h1
        className={
          isVisible ? "how__we__tech__title visible" : "how__we__tech__title"
        }
      >
        Ut wisi enim ad minim exerci tation ullamcorper.
      </h1>
      <VisibilitySensor
        partialVisibility
        offset={{ top: 200 }}
        onChange={onChange}
        active={!isVisible}
      >
        <div
          className={
            (isVisible
              ? "how__we__tech__container visible"
              : "how__we__tech__container") +
            " " +
            props.grid
          }
        >
          <Humans />
        </div>
      </VisibilitySensor>
    </section>
  );
};
export default HowWeTeach;
