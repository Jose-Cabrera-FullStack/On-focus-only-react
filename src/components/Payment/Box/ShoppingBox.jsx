import React from "react";
import { Link } from "react-router-dom";

import "../../../assets/styles/components/ShoppingCar.scss";
import ButtonArrowRight from "../../Utils/ButtonArrowRight";

const ShoppingBox = (props) => {
  // console.log(props)
  return (
    <div className="shopping__car__box">
      <div className="shopping__car__box__inside">
        <div className={"flex" + " " + props.onlyDesktop}>
          <p className="shopping__car__box__inside__text">
            Total en el carrito
          </p>
          <strong>
            {props.country}$ {props.total}
          </strong>
        </div>
        <div className={"flex" + " " + props.onlyDesktop}>
          <p className="shopping__car__box__inside__text shopping__car__box__inside__text--red">
            <i className="shopping__car__box__inside__discounts">
              Dcto. {props.discount}%
            </i>
            <br /> Estás ahorrando
          </p>
          <i className="shopping__car__box__inside__promo shopping__car__box__inside__promo--red">
            {props.country}${props.save}
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
            AR$ {props.totalToPay}
          </h4>
        </div>
        <div className={"flex" + " " + props.onlyMobile}>
          <div className="flex shopping__car__box__inside__mobile">
            <p className="shopping__car__box__inside__text shopping__car__box__inside__text--red">
              <i className="shopping__car__box__inside__discounts">
                Dcto. {"discount ? parseInt(totalDiscount) : 0"} %
              </i>
              <br /> Estás ahorrando{" "}
            </p>
            <i className="shopping__car__box__inside__promo shopping__car__box__inside__promo--red">
              AR$ {"sa"}
            </i>
          </div>
        </div>
        <div className="shopping__car__box__inside__button">
          <Link to="/pago">
            <ButtonArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBox;
