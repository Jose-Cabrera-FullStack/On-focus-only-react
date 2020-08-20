import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../actions";
// import Google from '../assets/static/images/social-network/google.png'; habilitar despues

import "../assets/styles/components/Login.scss";

import Facebook from "../assets/static/images/svg/facebook-icon-button.svg";
import Google from "../assets/static/images/svg/google-icon-button.svg";

import Arrow from "../assets/static/images/svg/arrow-visualization-black.svg";
import Button from "../components/Utils/ButtonArrowRight";

const Login = (props) => {
  const { register, errors, handleSubmit } = useForm();
  const [form, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    props.loginUser(form, "/mis-cursos");
  };

  return (
    <>
      <section className="login">
        <div className="login__inside">
          <span
            onClick={props.handleClose}
            className="congratulation__exit--login"
            alt="Ícono para salir"
          ></span>
          <div
            className="login__inside__go__back__button"
            onClick={props.handleClose}
          >
            <div className="flex">
              <img src={Arrow} alt="" />
              <h1>Volver</h1>
            </div>
          </div>
          <h1 className="login__inside__title">
            Hola <br />
            Iniciar Sesión
          </h1>

          <button className="facebook__button">
            <img
              className="facebook__button__img"
              src={Facebook}
              alt="Logo de Facebook"
            />
            Continuá con Facebook
          </button>

          <button className="google__button">
            <img
              className="google__button__img"
              src={Google}
              alt="Logo de Google"
            />
            Continuá con Google
          </button>

          <form
            className="login__inside__form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="login__inside__form__label">
              O iniciá sesión con tu correo electrónico
            </label>
            <input
              name="email"
              className="login__inside__form__input"
              type="text"
              placeholder="Correo"
              onChange={handleInput}
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
                  message: "No puede tener mas de 50 caracteres",
                },
                minLength: {
                  value: 5,
                  message: "No puede tener menos de 5 caracteres",
                },
              })}
            />

            <span className="way-to-pay__input--error">
              {errors.email && errors.email.message}
            </span>

            <br />

            <label className="login__inside__form__label">Contraseña</label>
            <input
              name="password"
              className="login__inside__form__input"
              type="password"
              placeholder="Contraseña"
              onChange={handleInput}
              ref={register({
                required: {
                  value: true,
                  message: "Este campo es requerido",
                },
                maxLength: {
                  value: 20,
                  message: "No puede tener mas de 20 caracteres",
                },
                minLength: {
                  value: 6,
                  message: "No puede tener menos de 6 caracteres",
                },
              })}
            />

            <span className="way-to-pay__input--error">
              {errors.password && errors.password.message}
            </span>
            <Button
              text={"Iniciar Sesión"}
              width={"btn__secundary--login__modal"}
              onClick={handleSubmit}
            />
          </form>
          <p className="login__inside__text">
            ¿No eres miembro? <Link to="/registrarse">Registrate</Link>
          </p>
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(Login);
