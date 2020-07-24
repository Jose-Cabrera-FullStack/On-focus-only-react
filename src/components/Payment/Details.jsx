import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../../assets/styles/components/Payment.scss";

import Course from "../Utils/EmergentMenuBox/Course";

import arrowRight from "../../assets/static/images/svg/arrow-shopping-right.svg";
import arrowDown from "../../assets/static/images/svg/arrow-shopping-down.svg";

const Details = ({ total, totalBefore, shoppingcar }) => {
  const [isToggle, setToggle] = useState(false);

  const changeisToggle = () => setToggle(!isToggle);
  
  // <--------se debe refactorizar---------->
  let totalWithOutDiscount = 0;
  let totalDiscount = 0;
  const totalWithOutDiscountshoppingcar = shoppingcar.map(
    (item) => (totalWithOutDiscount += item.price)
    );
    
    const discount = shoppingcar.map(
      (item) => (totalDiscount += item.discount / shoppingcar.length)
      );
  // <--------se debe refactorizar---------->
      
  return (
    <section className="details">
      <div className="details__inside">
        <div className="flex">
          <h3 className="details__inside__title">Tu Carrito.</h3>
          <Link to="/carrito" className="details__inside__title__edit__link">
            <div className="flex">
              <p>Editar</p>
              <img src={arrowRight} alt="Flecha para la derecha" />
            </div>
          </Link>
        </div>
        <div>
          <div className="flex">
            <div className="details__inside__total">
              <p>Tu total es de</p>
              <strong>AR$ {total ? total : "0"}</strong>
            </div>
            <i className="details__inside__total__before">
              ARS {totalWithOutDiscount ? totalWithOutDiscount : "0"}
            </i>
          </div>
        </div>
        <div className="details__inside__detail flex" onClick={changeisToggle}>
          <p>Ver detalles</p>
          <img src={arrowDown} alt="Fecla para abajo" />
        </div>
        <div className={isToggle ? "" : "display-none"}>
          <hr />
          {shoppingcar.length > 0 ? 
          <>
          {shoppingcar.map((item) => {
            return (
              <div key={item.course_id}>
                <Course
                shoppingCar
                course_id={item.course_id}
                src={item.featured_image}
                teacher={item.teacher}
                />
              </div>
            );
          })}
          </>
          :
          <p>No tienes items</p>}
          
          {/* <Course shoppingCar teacher={"David Guerra"} />
          <Course shoppingCar teacher={"David Guerra"} /> */}
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
