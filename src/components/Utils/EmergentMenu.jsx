import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../assets/styles/components/ShoppingCar.scss";
import "../../assets/styles/components/Principal.scss";

import Course from "./EmergentMenuBox/Course";

import ButtonArrowRight from "./ButtonArrowRight";

const EmergentMenu = ({
  toggle,
  total,
  shoppingcar,
  mobile,
  desktop,
  location,
}) => {
  let isCourseLink = false;

  const reload = () => {
    window.location.reload();
  };

  if (location != undefined)
    if (location.location != undefined)
      location.location.pathname === "/cursos" ? (isCourseLink = true) : "";

  return mobile ? (
    <div className={toggle ? "hero__view__promo slide-in-top" : "display-none"}>
      {shoppingcar.length > 0 ? (
        <>
          {shoppingcar.map((item, index) => {
            return (
              <div key={index}>
                <Course
                  course_id={item.course_id}
                  src={item.featured_image}
                  title={item.name}
                  price={item.price - item.price * (item.discount / 100)}
                  priceBefore={item.price}
                  mobile
                />
              </div>
            );
          })}
          <div className="hero__view__promo__total">
            <div className="flex">
              <h2>Tu total es de:</h2>
              <h2 className="hero__view__promo__total__ar">
                AR$ {total ? total.total : "987"}
              </h2>
            </div>
          </div>
          <div className="hero__view__promo__margin__btn flex">
            <ButtonArrowRight
              link={"/pago"}
              text="Comprar"
              icon={"btn__arrow__black"}
              iconHover={"btn__arrow__white"}
              width={"btn__secundary--emergent"}
            />
            <ButtonArrowRight
              link={"/carrito"}
              text="Ir al carrito"
              icon={"btn__arrow__buy__shopping"}
              width={"btn__secundary--emergent__shopping"}
            />
          </div>
        </>
      ) : (
        <p className="hero__view__promo__empty">
          {" "}
          No hay cursos cargados en tu carrito.{" "}
          <Link
            className="text-decoration text-decoration--navbar"
            to={"/cursos"}
          >
            Buscar cursos
          </Link>
        </p>
      )}
    </div>
  ) : (
    <div className={toggle ? "hero__view__promo slide-in-top" : "display-none"}>
      {shoppingcar.length > 0 ? (
        <>
          {shoppingcar.map((item) => {
            return (
              <div key={item.course_id}>
                <Course
                  course_id={item.course_id}
                  src={item.featured_image}
                  title={item.name}
                  price={item.price - item.price * (item.discount / 100)}
                  priceBefore={item.price}
                  desktop={desktop}
                />
              </div>
            );
          })}
          <div className="hero__view__promo__total">
            <div className="flex">
              <h2>Tu total es de:</h2>
              <h2 className="hero__view__promo__total__ar">
                AR$ {total ? total.total : "987"}
              </h2>
            </div>
          </div>
          <div className="hero__view__promo__margin__btn flex">
            <ButtonArrowRight
              link={"/pago"}
              text="Comprar"
              icon={"btn__arrow__black"}
              iconHover={"btn__arrow__white"}
              width={"btn__secundary--emergent"}
            />
            <ButtonArrowRight
              link={"/carrito"}
              text="Ir al carrito"
              icon={"btn__arrow__buy__shopping"}
              iconHover={"btn__arrow__buy__shopping--white"}
              width={"btn__secundary--emergent__shopping"}
            />
          </div>
        </>
      ) : (
        <p className="hero__view__promo__empty">
          No hay cursos cargados en tu carrito. <br />
          {isCourseLink ? (
            <span
              className="text-decoration--navbar hero__view__promo__empty__text"
              onClick={reload}
            >
              Buscar cursos
            </span>
          ) : (
            <Link
              className="text-decoration text-decoration--navbar"
              to={"/cursos"}
            >
              Buscar cursos
            </Link>
          )}
        </p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    shoppingcar: state.shoppingcar || {},
    total: state.total,
  };
};

export default connect(mapStateToProps, null)(EmergentMenu);
