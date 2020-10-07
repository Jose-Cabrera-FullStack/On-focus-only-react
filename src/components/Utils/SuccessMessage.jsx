import React, { useState, useEffect } from "react";

import "../../assets/styles/components/Utils.scss";

import Message from "../../assets/static/images/svg/send-message.svg";

const SuccessMessage = (props) => {
  const [isShowed, setIsShowed] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsShowed(false), 5000);
  });
  return (
    <>
      {isShowed ? (
        <div className="contact__check__message slide-in-top flex">
          <img src={props.fail ? "" : Message} alt="" />
          <p>
            {props.text
              ? props.text
              : "Tu contraseña nueva ha sido guardada con éxito."}{" "}
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default SuccessMessage;
