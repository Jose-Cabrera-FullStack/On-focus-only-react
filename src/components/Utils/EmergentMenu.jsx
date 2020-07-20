import React from "react";
import { connect } from "react-redux";

import "../../assets/styles/components/ShoppingCar.scss";

import Course from "./EmergentMenuBox/Course";

import ButtonArrowRight from "./ButtonArrowRight";

const EmergentMenu = ({ toggle, total, shoppingcar }) => {

  return (
    <div className={toggle ? "hero__view__promo" : "display-none"}>
      {shoppingcar.length > 0 ? (
        <>
          {shoppingcar.map((item) => {
            return (
              <div key={item.course_id}>
                <Course
                  course_id={item.course_id}
                  src={item.featured_image}
                  title={item.name}
                  price={item.price}
                  priceBefore={item.price * (item.discount / 100)}
                />
              </div>
            );
          })}
          <div className="hero__view__promo__total">
            <div className="flex">
              <h2>Tu total es de:</h2>
              <h2 className="hero__view__promo__total__ar">
                AR$ {total ? total : "987"}
              </h2>
            </div>
          </div>
          <div className="hero__view__promo__margin__btn">
            <ButtonArrowRight
              text="Comprar"
              icon={"btn__arrow__black"}
              width={"btn__secundary--emergent"}
            />
            <ButtonArrowRight
              text="Ir al carrito"
              icon={"btn__arrow__buy__shopping"}
              width={"btn__secundary--emergent__shopping"}
            />
          </div>
        </>
      ) : (
        <p>No hay elementos escogidos</p>
      )}

      {/* <Course margin={"hero__view__promo__margin"} /> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    shoppingcar: state.shoppingcar || {},
  };
};

export default connect(mapStateToProps, null)(EmergentMenu);
