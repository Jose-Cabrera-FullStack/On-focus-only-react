import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../actions";
// import Google from '../assets/static/images/social-network/google.png'; habilitar despues

import "../assets/styles/components/Login.scss";

import Facebook from "../assets/static/images/svg/facebook-icon-button.svg";
import Google from "../assets/static/images/svg/google-icon-button.svg";

import Button from "../components/Utils/ButtonArrowRight";

const Login = (props) => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginUser(form, "/mis-cursos");
  };

  console.log("Email:",form.email)
  console.log("Password:",form.password)

  // getModalStyle is not a pure function, we roll the style only on the first render
  return (
    <>
      <section className="login">
        <div className="login__inside">
          <span
            onClick={props.handleClose}
            className="congratulation__exit--login"
            alt="Ícono para salir"
          ></span>
          <h1 className="login__inside__title">
            Hola <br />
            Lorem ipsum dolor sit amet.
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

          <form action="" className="login__inside__form" onSubmit={handleSubmit}>
            <label className="login__inside__form__label">
              O iniciá sesión con tu correo electrónico
            </label>
            <input
              name="email"
              className="login__inside__form__input"
              type="text"
              placeholder="Correo"
              onChange={handleInput}
            />

            <label className="login__inside__form__label">Contraseña</label>
            <input
              name="password"
              className="login__inside__form__input"
              type="password"
              placeholder="Contraseña"
              onChange={handleInput}
            />
              <Button
                text={"Iniciar Sesión"}
                width={"btn__secundary--login__modal"}
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
