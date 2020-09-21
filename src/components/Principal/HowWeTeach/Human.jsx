import React from "react";

import "../../../assets/styles/components/HowWeTeach.scss";

const Human = ({ title, src, imgClass, text }) => {
  return (
    <div className="how__we__tech__info">
      <figure className="how__we__tech__info__figure">
        <img
          className={imgClass ? imgClass : "how__we__tech__info__img"}
          src={src}
          alt="human happy"
        />
      </figure>
      <h5 className="how__we__tech__info__title">{title}</h5>
      <p className="how__we__tech__info__text">{text}</p>
    </div>
  );
};
export default Human;
