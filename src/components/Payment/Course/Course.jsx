import React from "react";
import { connect } from "react-redux";

import "../../../assets/styles/components/ShoppingCar.scss";

import { deleteFavorite } from "../../../actions";

import UI from "../../../assets/static/images/img/ui-design.png";

const Price = (props) => {
  const handleDeleteShopping = (course_id) => {
    props.deleteFavorite(course_id);
  };

  return (
    <div className={"flex" + " " + props.margin}>
      <img
        className="hero__view__promo__img"
        src={props.src ? props.src : UI}
        alt="Imagen del curso"
      />
      <div>
        <h3 className="hero__view__promo__title hero__view__promo__title--shopping__car">
          {props.title ? props.title : "Aprende a ser mejor lider."}
        </h3>
        <p className="hero__view__promo__teacher--shopping">
          Por {props.teacher ? props.teacher : "Juan Pablo Laco"}
        </p>
        <div className="flex">
          <h2 className="hero__view__promo__price hero__view__promo__price--shopping__car">
            AR$ {props.price ? parseInt(props.price) : 0}
          </h2>
          <p className="hero__view__promo__price__before hero__view__promo__price__before--shopping__car">
            AR$ {props.priceBefore ? parseInt(props.priceBefore) : 0}
          </p>
          <p
            onClick={() => handleDeleteShopping(props.course_id)}
            className={
              "hero__view__promo__price__delete hero__view__promo__price__delete--shopping__car" +
              " " +
              props.onlyMobile
            }
          >
            Eliminar
          </p>
        </div>
        <p
          onClick={() => handleDeleteShopping(props.course_id)}
          className={
            "hero__view__promo__price__delete hero__view__promo__price__delete--shopping__car--mobile hero__view__promo__price__delete--shopping__car" +
            " " +
            props.onlyDesktop
          }
        >
          Eliminar
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(Price);
