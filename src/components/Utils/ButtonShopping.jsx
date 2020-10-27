import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../../assets/styles/components/Utils.scss";
import "../../assets/styles/components/Course.scss";

import ButtonArrowRight from "../Utils/ButtonArrowRight";
import Shopping from "../Utils/ShoppingCarSquare";

import { setFavorite } from "../../actions";

const ButtonShopping = (props) => {
  const coursePay = props.course;

  const {
    category,
    course_id,
    creation_date,
    description,
    discount,
    duration,
    entity_status,
    featured_image,
    module,
    name,
    price,
    status,
    students,
    teacher,
    video_intro,
  } = coursePay;

  const total = price - (price * discount) / 100;

  const handleShopping = () => {
    props.setFavorite({
      category,
      course_id,
      creation_date,
      description,
      discount,
      duration,
      entity_status,
      featured_image,
      module,
      name,
      price,
      status,
      students,
      teacher,
      video_intro,
      total,
    });
  };

  return (
    <div className="discovery__box__info__inside__buttons flex">
      <Link to="/pago">
        <ButtonArrowRight onClick={handleShopping} />
      </Link>
      <Shopping course={coursePay} individualCourse />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    course: state.CourseSlug || {},
  };
};

const mapDispatchToProps = {
  setFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonShopping);
