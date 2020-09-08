import React, { useState, useEffect } from "react";
import Vimeo from "@u-wave/react-vimeo";

import "../../assets/styles/components/Visualization.scss";
import "../../assets/styles/components/Course.scss";

const SmallVideo = ({ video_id, onlyMobile, OnlyDesktop }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div
      className={
        screenWidth < 1024
          ? "course__video__mobile" + " " + OnlyDesktop + " " + onlyMobile
          : onlyMobile
      }
    >
      <Vimeo
        video={video_id ? video_id : "76979871"}
        width={screenWidth < 1024 ? "" : "661px"}
      />
    </div>
  );
};
export default SmallVideo;
