import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "../../../assets/styles/components/ShoppingCar.scss";
import Checkbox from "../../Utils/Checkbox";

import ButtonArrowRight from "../../Utils/ButtonArrowRight";

import Visa from "../../../assets/static/images/img/visa.png";
import MasterCard from "../../../assets/static/images/img/mastercard.png";
import AmeticaExpress from "../../../assets/static/images/img/american-express.png";

import Check from "../../../assets/static/images/svg/icon-check.svg";

const CreditCard = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const [form, setForm] = useState({
    creditNumber: "",
  });

  const handleInputCheck = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const onSubmit = (data, event) => {
    setForm({ creditNumber: data.creditNumber });
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="way-to-pay__input__box">
      <p className="way-to-pay__input__box__title">
        Ingresá los datos de tu tarjeta
      </p>
      <input
        className="way-to-pay__input way-to-pay__input--card"
        type="text"
        name="creditNumber"
        placeholder="Número de la tarjeta"
        onChange={handleInputCheck}
        ref={register({
          required: {
            value: true,
            message: "Este campo es requerido",
          },
          pattern: {
            value: /^\d+$/i,
            message: "Debe ser numeros solamente",
          },
          maxLength: {
            value: 16,
            message: "No puede tener mas de 16 numeros",
          },
          minLength: {
            value: 13,
            message: "No puede tener menos de 13 numeros",
          },
        })}
      />
      {form.creditNumber.length > 12 && form.creditNumber.length < 17 ? (
        <img
          src={Check}
          alt="Icono de check"
          className="way-to-pay__input--check--initial way-to-pay__input--check--initial--correct"
        />
      ) : (
        <img
          src={Check}
          alt="Icono de check"
          className="way-to-pay__input--check--initial"
        />
      )}

      {errors.creditNumber ? (
        <img
          src={Check}
          alt="Icono de check"
          className="way-to-pay__input--check"
        />
      ) : (
        <img
          src={Check}
          alt="Icono de check"
          className="way-to-pay__input--check way-to-pay__input--check--correct"
        />
      )}

      <br />

      <span className="way-to-pay__input--error">
        {errors.creditNumber && errors.creditNumber.message}
      </span>

      <div className="flex">
        <input
          type="text"
          placeholder="MM/AA"
          name="mmaaNumber"
          className="way-to-pay__input way-to-pay__input--MM"
          ref={register({
            required: {
              value: true,
              message: "Este campo es requerido",
            },
            pattern: {
              value: /^\d+$/i,
              message: "Debe ser numeros solamente",
            },
            maxLength: {
              value: 4,
              message: "Deben ser 4 numeros",
            },
            minLength: {
              value: 4,
              message: "Deben ser 4 numeros",
            },
          })}
        />

        <span className="way-to-pay__input--error way-to-pay__input--error--variation">
          {errors.mmaaNumber && errors.mmaaNumber.message}
        </span>

        <input
          type="text"
          name="securityNumber"
          placeholder="Código de seguridad"
          className="way-to-pay__input way-to-pay__input--segurity"
          ref={register({
            required: {
              value: true,
              message: "Este campo es requerido",
            },
            pattern: {
              value: /^\d+$/i,
              message: "Debe ser numeros solamente",
            },
            maxLength: {
              value: 3,
              message: "Deben ser 3 numeros",
            },
            minLength: {
              value: 3,
              message: "Deben ser 3 numeros",
            },
          })}
        />
      </div>
      <span className="way-to-pay__input--error way-to-pay__input--error--variation--segurity">
        {errors.securityNumber && errors.securityNumber.message}
      </span>
      <div className="way-to-pay__input__btn flex">
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
