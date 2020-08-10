import React from "react";

import "../../assets/styles/components/Course.scss";
import Arrow from "../../assets/static/images/svg/arrow-up.svg";

const ScrollArrowUp = ({}) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <img
      onClick={scrollTop}
      id="footer__arrow"
      className="footer__arrow"
      src={Arrow}
      alt="Flecha hacia arriba"
    />
  );
};
export default ScrollArrowUp;
