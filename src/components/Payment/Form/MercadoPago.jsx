import React from "react";
import { Link } from "react-router-dom";

import "../../../assets/styles/components/Payment.scss";

import ButtonArrowRight from "../../Utils/ButtonArrowRight";

const MercadoPago = ({ modal, onClick }) => (
  <div className="way-to-pay__input__box--variant way-to-pay__box__card--mercado__pago">
    <p className="way-to-pay__box__card--mercado__pago__text">
      Para poder continuar debes iniciar sesión con tu cuenta de Mercado Pago.
    </p>
    <ButtonArrowRight
      onClick={onClick}
      margin={
        "btn__secundary--way-to-pay way-to-pay__box__card--mercado__pago__text__btn"
      }
    />
    {modal}
  </div>
);
export default MercadoPago;
