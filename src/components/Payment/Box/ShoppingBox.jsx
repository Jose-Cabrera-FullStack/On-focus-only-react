import React, { useEffect } from "react";
import { connect } from "react-redux";

import "../../../assets/styles/components/ShoppingCar.scss";
import ButtonArrowRight from "../../Utils/ButtonArrowRight";

import { totalShopping } from "../../../actions";

const ShoppingBox = (props) => {
  let totalWithOutDiscount = 0;
  let totalDiscount = 0;
  const totalWithOutDiscountshoppingcar = props.shoppingcar.map(
    (item) => (totalWithOutDiscount += item.price)
  );
  const discount = props.shoppingcar.map(
    (item) => (totalDiscount += item.discount / props.shoppingcar.length)
  );

  let totalToPay = parseInt(
    totalWithOutDiscount - (totalWithOutDiscount * totalDiscount) / 100
  );

  useEffect(() => {
    props.totalShopping(totalToPay);
  });

  return (
    <div className="shopping__car__box">
      <div className="shopping__car__box__inside">
        <div className={"flex" + " " + props.onlyDesktop}>
          <p className="shopping__car__box__inside__text">
            Total en el carrito
          </p>
          <strong>
            AR$ {totalWithOutDiscountshoppingcar ? totalWithOutDiscount : 0}
          </strong>
        </div>
        <div className={"flex" + " " + props.onlyDesktop}>
          <p className="shopping__car__box__inside__text shopping__car__box__inside__text--red">
            <i className="shopping__car__box__inside__discounts">
              Dcto. {discount ? parseInt(totalDiscount) : 0}%
            </i>
            <br /> Estás ahorrando{" "}
          </p>
          <i className="shopping__car__box__inside__promo shopping__car__box__inside__promo--red">
            AR${" "}
            {totalWithOutDiscountshoppingcar
              ? parseInt((totalWithOutDiscount * totalDiscount) / 100)
              : 0}
          </i>
        </div>
        <hr
          className={
            "shopping__car__box__inside__line" + " " + props.onlyDesktop
          }
        />
        <div className="flex">
          <h4 className="shopping__car__box__inside__total">Tu total es de</h4>
          <h4 className="shopping__car__box__inside__total shopping__car__box__inside__total--price">
            AR$ {totalWithOutDiscount ? props.total : 0}
          </h4>
        </div>
        <div className={"flex" + " " + props.onlyMobile}>
          <div className="flex shopping__car__box__inside__mobile">
            <p className="shopping__car__box__inside__text shopping__car__box__inside__text--red">
              <i className="shopping__car__box__inside__discounts">Dcto. 30%</i>
              <br /> Estás ahorrando{" "}
            </p>
            <i className="shopping__car__box__inside__promo shopping__car__box__inside__promo--red">
              AR$ 478
            </i>
          </div>
        </div>
        <div className="shopping__car__box__inside__button">
          <ButtonArrowRight />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    shoppingcar: state.shoppingcar || {},
    total: state.total,
  };
};
const mapDispatchToProps = {
  totalShopping,
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBox);
