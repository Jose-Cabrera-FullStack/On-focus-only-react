import React from "react";
import { connect } from "react-redux";

import "../../../assets/styles/components/ShoppingCar.scss";
import UI from "../../../assets/static/images/img/ui-design.png";
import capitalizeFirstLetter from "../../../Utils/capitalizeFirstLetter";

import { deleteFavorite } from "../../../actions";

const Course = ({
  course_id,
  margin,
  src,
  title,
  price,
  priceBefore,
  shoppingCar,
  teacher,
  deleteFavorite,
  mobile,
  desktop,
}) => {
  const handleDeleteShopping = (course_id) => {
    deleteFavorite(course_id);
  };

  return (
    <div className={"flex" + " " + margin}>
      <img
        className={
          desktop
            ? "hero__view__promo__img--shopping__car"
            : shoppingCar
            ? "hero__view__promo__img--details"
            : mobile
            ? "hero__view__promo__img--mobile"
            : "hero__view__promo__img"
        }
        src={src ? src : UI}
        alt="Imagen del curso"
      />
      <div>
        <h3
          className={
            desktop
              ? "hero__view__promo__title--shopping__car"
              : shoppingCar
              ? "hero__view__promo__title--details"
              : "hero__view__promo__title"
          }
        >
          {title ? capitalizeFirstLetter(title) : "Aprende a ser mejor lider."}
        </h3>
        <div className={shoppingCar ? "display-none" : "flex"}>
          <h2 className="hero__view__promo__price">
            AR$ {price ? parseInt(price) : "482"}
          </h2>
          <p className="hero__view__promo__price__before">
            AR$ {priceBefore ? parseInt(priceBefore) : "860"}
          </p>
          <p
            onClick={() => handleDeleteShopping(course_id)}
            className="hero__view__promo__price__delete"
          >
            Eliminar
          </p>
        </div>
        {teacher ? (
          <p
            className={
              shoppingCar
                ? "hero__view__promo__teacher--shopping__car hero__view__promo__teacher--shopping__car--details"
                : "hero__view__promo__teacher--shopping__car"
            }
          >
            Por {teacher ? capitalizeFirstLetter(teacher.full_name) : "Juan Pablo Laco"}
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(Course);
