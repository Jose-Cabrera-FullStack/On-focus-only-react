import React from "react";

import "../../assets/styles/components/Utils.scss";

const ButtonPrimary = (props) => {
  return (
    <button className="btn__primary btn__primary--fix btn__primary--teacher">
      {props.text ? props.text : "Quiero dar un curso"}
    </button>
  );
};
export default ButtonPrimary;
