import React from "react";
import { connect } from "react-redux";

import Breadcrumbs from "../Utils/Breadcrumbs";

import ShoppingBox from "../Payment/Box/ShoppingBox";
import Course from "./Course/Course";

import "../../assets/styles/components/ShoppingCar.scss";

const ShoppingCar = (props) => (
  <section className="shopping__car">
    <Breadcrumbs />
    <h1>Tu carrito de compras está listo.</h1>
    <div className={"flex" + " " + props.onlyMobile}>
      <div>
        {props.shoppingcar.length > 0 ? (
          <>
            {props.shoppingcar.map((item) => {
              return (
                <div key={item.course_id}>
                  <Course
                    onlyMobile={"display__screen__desktop"}
                    onlyDesktop={"display__screen__mobile"}
                    course_id={item.course_id}
                    src={item.featured_image}
                    title={item.name}
                    price={item.price - item.price * (item.discount / 100)}
                    priceBefore={item.price}
                    inShopping={item.inShopping}
                    teacher={item.teacher}
                  />
                  <hr className="shopping__car__line" />
                </div>
              );
            })}
          </>
        ) : (
          <p className="shopping__car__empty">no hay elementos</p>
        )}
      </div>
      {props.shoppingcar.length > 0 ? (
        <ShoppingBox
          onlyDesktop={"display__screen__desktop"}
          onlyMobile={"display__screen__mobile"}
        />
      ) : (
        ""
      )}
    </div>
  </section>
);
const mapStateToProps = (state) => {
  return {
    shoppingcar: state.shoppingcar || {},
  };
};
export default connect(mapStateToProps, null)(ShoppingCar);
