import React, { useState } from "react";
import { connect } from "react-redux";
import VisibilitySensor from "react-visibility-sensor";

import "../../assets/styles/components/Course.scss";

import Discount from "./SaveMoney/Discount";
import YouSave from "./SaveMoney/YouSave";

import ButtonShopping from "../Utils/ButtonShopping";

const RectangleWithPriceAndDiscount = ({ course, category, onlyMobile }) => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = (visiblity) => {
    setVisibility(visiblity);
  };
  return (
    <VisibilitySensor
      partialVisibility
      offset={{ top: 200 }}
      onChange={onChange}
    >
      <div
        className={
          onlyMobile
            ? "discovery__box__info--mobile"
            : isVisible
            ? "discovery__box__info discovery__box__info--course display__course__screen__desktop visible"
            : "discovery__box__info discovery__box__info--course display__course__screen__desktop"
        }
      >
        <div className="discovery__box__info__inside">
          <h2 className="discovery__box__info__inside__title">
            Lsrem ipsum dolor sit amet sed diam nonummy.
          </h2>
          <p className="discovery__box__info__inside__text">
            Lorem ipsum dolor sit amet, consectse diam nonummy nibh euismod
            tincidunt.
          </p>
          <YouSave course={course} />
          <Discount />
          <ButtonShopping />
        </div>
      </div>
    </VisibilitySensor>
  );
};

const mapStateToProps = (state) => {
  return {
    category: state.category || {},
    course: state.CourseSlug || {},
  };
};

export default connect(mapStateToProps, null)(RectangleWithPriceAndDiscount);
