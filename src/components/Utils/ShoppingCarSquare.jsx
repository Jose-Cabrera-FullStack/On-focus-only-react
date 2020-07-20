import React, { useState } from "react";
import { connect } from "react-redux";

import { setFavorite, deleteFavorite } from "../../actions";
import ShoppingCar from "../../assets/static/images/svg/shopping-car-squad.svg";
import ShoppingCarSelected from "../../assets/static/images/svg/shopping-car-squad-black.svg";

import "../../assets/styles/components/Utils.scss";

const ShoppingCarSquare = (props) => {
  const course = props.course;

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
  } = course;

  const [isToggle, setIsToggle] = useState(false);

  const handleShopping = () => {
    setIsToggle(!isToggle);

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
    });
  };

  const handleDeleteShopping = (course_id) => {
    setIsToggle(!isToggle);
    props.deteleFavorite(course_id);
  };

  return (
    <div
      onClick={isToggle ? handleShopping :() => handleDeleteShopping(course_id)}
      className={" discovery__box__info__icon" + " " + props.class}
      alt="Shopping Car"
    >
      <img src={isToggle ? ShoppingCarSelected : ShoppingCar} alt="" />
    </div>
  );
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};
export default connect(null, mapDispatchToProps)(ShoppingCarSquare);
