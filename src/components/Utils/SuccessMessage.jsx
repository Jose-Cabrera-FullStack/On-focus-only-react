import React from "react";

import "../../assets/styles/components/Utils.scss";

import Message from "../../assets/static/images/svg/send-message.svg";

const SuccessMessage = (props) => {
  return (
    <div className="contact__check__message flex">
      <img src={Message} alt="" />
      <p>
        {props.text
          ? props.text
          : "Tu contraseña nueva ha sido guardada con éxito."}{" "}
      </p>
    </div>
  );
};
export default SuccessMessage;
