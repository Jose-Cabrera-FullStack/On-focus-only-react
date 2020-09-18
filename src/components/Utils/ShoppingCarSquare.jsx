import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { setFavorite, deleteFavorite, totalShopping } from "../../actions";
import ShoppingCar from "../../assets/static/images/svg/shopping-car-squad.svg";
import ShoppingCarHover from "../../assets/static/images/svg/shopping-car-squad-hover.svg";
import ShoppingCarSelected from "../../assets/static/images/svg/shopping-car-squad-black.svg";

import MessageTimeOut from "./MessageTimeOut";
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

  const [isSelected, setIsSelected] = useState(false);

  const handleShopping = () => {
    setIsSelected(!isSelected);
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

  let isSelectedInShoppingCar = false;

  props.shoppingcar.map((item) =>
    item.course_id === course_id ? (isSelectedInShoppingCar = true) : ""
  );

  const handleDeleteShopping = (course_id) => {
    setIsSelected(!isSelected);
    props.deleteFavorite(course_id);
  };

  const [isHover, setIsHover] = useState(false);
  const HoverHandle = () => setIsHover(!isHover);
  // <----------Se debe refactorizar mas adelante----------->

  let totalWithOutDiscount = 0;
  let totalDiscount = 0;
  props.shoppingcar.map((item) => (totalWithOutDiscount += item.price));
  props.shoppingcar.map(
    (item) => (totalDiscount += item.discount / props.shoppingcar.length)
  );

  let totalToPay = parseInt(
    totalWithOutDiscount - (totalWithOutDiscount * totalDiscount) / 100
  );
  useEffect(() => {
    props.totalShopping(totalToPay);
  });
  // <----------Se debe refactorizar mas adelante----------->

  return (
    <>
      {isSelected ? (
        <>
          <div
            onClick={() => handleDeleteShopping(course_id)}
            className={" discovery__box__info__icon" + " " + props.class}
            alt="Shopping Car"
          >
            <img
              className="shopping__car__icon__squad--select"
              src={ShoppingCarSelected}
              alt="Ícono de Carrito de compra seleccionado"
            />
          </div>
          <MessageTimeOut
            individualCourse={props.individualCourse}
            text={"Agregado al carrito"}
          />
        </>
      ) : isSelectedInShoppingCar ? (
        <div
          onClick={() => handleDeleteShopping(course_id)}
          className={" discovery__box__info__icon" + " " + props.class}
          alt="Shopping Car"
        >
          <img
            className="shopping__car__icon__squad--select"
            src={ShoppingCarSelected}
            alt="Ícono de Carrito de compra seleccionado"
          />
        </div>
      ) : (
        <div
          onClick={handleShopping}
          className={" discovery__box__info__icon" + " " + props.class}
          alt="Shopping Car"
          onMouseEnter={HoverHandle}
          onMouseLeave={HoverHandle}
        >
          {isHover ? (
            <img
              className="shopping__car__icon__squad"
              src={ShoppingCarHover}
              alt="Ícono de Carrito de compra seleccionado"
            />
          ) : (
            <img
              className="shopping__car__icon__squad"
              src={ShoppingCar}
              alt="Ícono de Carrito de compra seleccionado"
            />
          )}
          <MessageTimeOut
            individualCourse={props.individualCourse}
            text={"Se quito del carrito"}
          />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    shoppingcar: state.shoppingcar || {},
    total: state.total,
  };
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
  totalShopping,
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCarSquare);
