import React, { useState, useEffect } from "react";

import "../../assets/styles/components/Utils.scss";
import Check from "../../assets/static/images/svg/check-shopping-car.svg";

const MessageTimeOut = (props) => {
  const [isShowed, setIsShowed] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsShowed(false), 1500);
  });
  return (
    <>
      {isShowed ? (
        <div
          className={
            props.individualCourse
              ? "shopping__car__icon__squad--select__message shopping__car__icon__squad--select__message--individual flex slide-in-top"
              : "shopping__car__icon__squad--select__message flex slide-in-top"
          }
        >
          <img src={Check} alt="Ícono de Check" />
          <p>{props.text ? props.text : "Agregado al carrito"}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MessageTimeOut;
