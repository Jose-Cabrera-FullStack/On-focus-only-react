import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../../assets/styles/components/Payment.scss";

import Course from "../Utils/EmergentMenuBox/Course";

import arrowRight from "../../assets/static/images/svg/arrow-shopping-right.svg";
import arrowUp from "../../assets/static/images/svg/arrow-shopping-up.svg";
import arrowDown from "../../assets/static/images/svg/arrow-shopping-down.svg";

const Details = ({ total, shoppingcar }) => {
  const [isToggle, setToggle] = useState(false);

  const changeisToggle = () => setToggle(!isToggle);

  let totalWithOutDiscount = 0;
  let totalDiscount = 0;

  shoppingcar.map((item) => (totalWithOutDiscount += item.price));

  shoppingcar.map(
    (item) => (totalDiscount += item.discount / shoppingcar.length)
  );

  const totalShopping = totalWithOutDiscount * (totalDiscount / 100);

  const finalTotal = totalWithOutDiscount - totalShopping;

  return (
    <section className="details">
      <div className="details__inside">
        <div className="flex">
          <h3 className="details__inside__title">Tu Carrito.</h3>
          <Link to="/carrito" className="details__inside__title__edit__link">
            <div className="details__inside__edit flex">
              <p>Editar</p>
              <img src={arrowRight} alt="Flecha para la derecha" />
            </div>
          </Link>
        </div>
        <div>
          <div className="flex">
            <div className="details__inside__total">
              <p>Tu total es de</p>
              <strong>AR$ {finalTotal ? parseInt(finalTotal) : "0"}</strong>
            </div>
            <i className="details__inside__total__before">
              ARS {totalWithOutDiscount ? totalWithOutDiscount : "0"}
            </i>
          </div>
        </div>
        <div className="details__inside__detail flex" onClick={changeisToggle}>
          <p>Ver detalles</p>
          <img src={isToggle ? arrowUp : arrowDown} alt="Flecha para abajo" />
        </div>
        <div className={isToggle ? "slide-in-top" : "display-none"}>
          <hr />
          {shoppingcar.length > 0 ? (
            <>
              {shoppingcar.map((item) => {
                return (
                  <div key={item.course_id}>
                    <Course
                      shoppingCar
                      course_id={item.course_id}
                      src={item.featured_image}
                      teacher={item.teacher}
                      title={item.name}
                    />
                  </div>
                );
              })}
            </>
          ) : (
            <p className="details__inside__detail__empty">No tienes items</p>
          )}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    shoppingcar: state.shoppingcar || {},
    total: state.total,
  };
};

export default connect(mapStateToProps, null)(Details);
