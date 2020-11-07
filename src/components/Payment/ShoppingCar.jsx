import React, { useEffect } from "react";
import { connect } from "react-redux";

import Breadcrumbs from "../Utils/Breadcrumbs";

import ShoppingBox from "../Payment/Box/ShoppingBox";
import Course from "./Course/Course";

import { totalShopping } from "../../actions";

import "../../assets/styles/components/ShoppingCar.scss";

const ShoppingCar = (props) => {
  let total = props.total.total || 0;
  let discount = 0;
  let totalWithoutDiscount = 0;
  props.shoppingcar.map((item) => {
    item.price.find((price) => {
      // console.log(price);
      price.country === props.country.id
        ? ((total += price.final_price),
          (discount += price.offer_discount),
          (totalWithoutDiscount += price.real_price))
        : "";
    });
  });
  useEffect(() => {
    props.totalShopping({
      total: total,
      discount: discount,
      totalWithoutDiscount: totalWithoutDiscount,
      totalToPay: Math.abs(
        total - (totalWithoutDiscount - (totalWithoutDiscount * discount) / 100)
      ),
    });
  });
  console.log("props:", props);
  return (
    <section className="shopping__car">
      <Breadcrumbs margin={"beadcrumbs--shopping"} />
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
                      teacher={item.teacher.full_name}
                    />
                    <hr className="shopping__car__line" />
                  </div>
                );
              })}
            </>
          ) : (
            <p className="shopping__car__empty">No hay elementos</p>
          )}
        </div>
        {props.shoppingcar.length > 0 ? (
          <ShoppingBox
            country={props.country.id}
            total={totalWithoutDiscount}
            discount={discount}
            save={
              totalWithoutDiscount - (totalWithoutDiscount * discount) / 100
            }
            totalWithDiscount={totalWithoutDiscount}
            totalToPay={
              totalWithoutDiscount -
              (totalWithoutDiscount - (totalWithoutDiscount * discount) / 100)
            }
            onlyDesktop={"display__screen__desktop"}
            onlyMobile={"display__screen__mobile"}
          />
        ) : (
          ""
        )}
      </div>
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    shoppingcar: state.shoppingcar || {},
    country: state.country || { id: "AR", name: "Argentina", currency: "AR$" },
    total: state.total || {},
  };
};

const mapDispatchToProps = {
  totalShopping,
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCar);
