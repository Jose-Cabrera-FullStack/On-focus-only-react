import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

import "../../../assets/styles/components/ShoppingCar.scss";
import Button from "../../../components/Utils/ButtonArrowRight";
import { sendMessageEmail } from "../../../actions";

const Form = (props) => {
  const { register, errors, handleSubmit } = useForm();
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = (form) => {
    props.sendMessageEmail(form);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="data__input__text"
        type="text"
        name="name"
        placeholder="Nombre Completo"
        ref={register({
          required: {
            value: true,
            message: "Este campo es requerido",
          },
          maxLength: {
            value: 50,
            message: "No puede tener más de 50 caracteres",
          },
          minLength: {
            value: 5,
            message: "No puede tener menos de 5 caracteres",
          },
        })}
      />
      <br />
      <span className="data__input__error">
        {errors.name && errors.name.message}
      </span>
      <input
        className="data__input__text"
        type="text"
        name="email"
        placeholder="E-mail"
        ref={register({
          required: {
            value: true,
            message: "Este campo es requerido",
          },
          pattern: {
            value: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            message: "Debe ser un email",
          },
          maxLength: {
            value: 50,
            message: "No puede tener más de 50 caracteres",
          },
          minLength: {
            value: 5,
            message: "No puede tener menos de 5 caracteres",
          },
        })}
      />
      <span className="register__box__inside--error register__box__inside--error__contact">
        {errors.email && errors.email.message}
      </span>
      <br />
      <input
        className="data__input__text"
        type="text"
        name="phone"
        placeholder="Teléfono (541126578956)"
        ref={register({
          required: {
            value: true,
            message: "Este campo es requerido",
          },
          pattern: {
            value: /^([0-9])*$/i,
            message: "Debe ser solo Números",
          },
          maxLength: {
            value: 15,
            message: "No puede tener más de 15 Números",
          },
          minLength: {
            value: 7,
            message: "No puede tener menos de 7 Números",
          },
        })}
      />
      <span className="register__box__inside--error register__box__inside--error__contact">
        {errors.phone && errors.phone.message}
      </span>
      <br />
      <textarea
        className="data__input__text data__input__text__area"
        name="message"
        cols="30"
        rows="10"
        placeholder="¿Cuál es el motivo por el cuál nos contactás?"
        ref={register({
          required: {
            value: true,
            message: "Este campo es requerido",
          },
          maxLength: {
            value: 1000,
            message: "No puede tener más de 1000 caracteres",
          },
          minLength: {
            value: 6,
            message: "No puede tener menos de 6 caracteres",
          },
        })}
      ></textarea>
      <span className="register__box__inside--error register__box__inside--error__contact">
        {errors.message && errors.message.message}
      </span>
      <br />
      <Button margin={"btn__secundary--data"} text={"Enviar"} />
    </form>
  );
};
const mapDispatchToProps = {
  sendMessageEmail,
};
export default connect(null, mapDispatchToProps)(Form);
