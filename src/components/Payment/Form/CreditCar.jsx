import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../../assets/styles/components/ShoppingCar.scss";
import Checkbox from "../../Utils/Checkbox";

import ButtonArrowRight from "../../Utils/ButtonArrowRight";

import Visa from "../../../assets/static/images/img/visa.png";
import MasterCard from "../../../assets/static/images/img/mastercard.png";
import AmeticaExpress from "../../../assets/static/images/img/american-express.png";

const CreditCard = (props) => {
  const [form, setForm] = useState({
    userName: "",
    creditNumber: "",
    mmaaNumber: "",
    securityNumber: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Se enviara estos datos al Backend")
  };

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="way-to-pay__input__box">
      <p className="way-to-pay__input__box__title">
        Ingresá los datos de tu tarjeta
      </p>
      <input
        onChange={handleInput}
        className="way-to-pay__input way-to-pay__input--card"
        type="text"
        name="userName"
        placeholder="Nombre del propietario"
      />
      <input
        onChange={handleInput}
        className="way-to-pay__input way-to-pay__input--card"
        type="text"
        name="creditNumber"
        placeholder="Número de la tarjeta"
      />
      <div className="flex">
        <input
          onChange={handleInput}
          type="text"
          placeholder="MM/AA"
          name="mmaaNumber"
          className="way-to-pay__input way-to-pay__input--MM"
        />
        <input
          onChange={handleInput}
          type="text"
          name="securityNumber"
          placeholder="Código de seguridad"
          className="way-to-pay__input way-to-pay__input--segurity"
        />
      </div>
      <p className="way-to-pay__input__required">
        Todos los campos son obligatorios
      </p>
      <div className="flex">
        <Checkbox />
        <div className="flex">
          <img className="way-to-visa" src={Visa} alt="Visa" />
          <img
            className="way-to-express"
            src={AmeticaExpress}
            alt="American Express"
          />
          <img className="way-to-master" src={MasterCard} alt="Mastercard" />
        </div>
      </div>
      <ButtonArrowRight background={"btn__secundary--way-to-pay"} />
    </form>
  );
};
export default CreditCard;
