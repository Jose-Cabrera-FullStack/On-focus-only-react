import React from "react";

import "../../assets/styles/components/Utils.scss";
import Logo from "../../assets/static/images/svg/logo-black.svg";

const LoadingPage = () => {
  return (
    <div className="loading_screen loading-screen-animation">
      <img src={Logo} alt="" />
    </div>
  );
};
export default LoadingPage;
