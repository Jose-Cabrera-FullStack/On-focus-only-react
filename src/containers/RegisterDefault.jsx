import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerUser } from "../actions";
import { loginUser } from "../actions";

import Button from "../components/Utils/ButtonArrowRight";
import Facebook from "../assets/static/images/svg/facebook-icon-button.svg";
import Google from "../assets/static/images/svg/google-icon-button.svg";

import Breadcrumbs from "../components/Utils/Breadcrumbs";
import Human from "../assets/static/images/svg/human-hello.svg";
import "../assets/styles/components/Register.scss";

const Register = (props) => {
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
    props.registerUser(form);
  };

  const hasError = Object.keys(props.error).length > 0;

  const UrlPathName = props.location.pathname;

  const Url = (UrlPathName) => {
    switch (UrlPathName) {
      case "/mi-perfil":
        return "Debes registrarte para acceder a tu perfil";
      case "/pago":
        return "Debes registrarte para acceder a pagar";
      case "/mis-cursos":
        return "Debes registrarte para acceder a tus cursos";
      default:
        return "Bienvenido/a";
    }
  };
  return (
    <section className="register">
      <div className="register__box">
        <div className="register__box__inside">
          <Breadcrumbs text={"Volver"} link={"/home"} />
          <div className="flex display__screen__mobile__without__flex">
            <img
              className="register__box__inside__img display__screen__desktop"
              src={Human}
              alt="Imagen de Humano Saludando"
            />
            <div>
              <h1>Hola!</h1>
              <h2>{Url(UrlPathName)}</h2>
            </div>
          </div>

          <button className="facebook__button facebook__button--register">
            <img
              className="facebook__button__img"
              src={Facebook}
              alt="Logo de Facebook"
            />
            Registrate con Facebook
          </button>

          <button className="google__button google__button--register">
            <img
              className="google__button__img"
              src={Google}
              alt="Logo de Google"
            />
            Registrate con Google
          </button>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h5 className="register__box__inside__label register__box__inside__label--register">
                Registrate con tu correo electrónico
              </h5>
              <input
                name="email"
                type="text"
                placeholder="tucorreo@gmail.com"
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
              <br />
              <span className="register__box__inside--error">
                {errors.email && errors.email.message}
              </span>
            </div>
            <div>
              <h5 className="register__box__inside__label register__box__inside__label--password">
                Contraseña
              </h5>
              <input
                name="password"
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
              <br />
              <span className="register__box__inside--error">
                {errors.password && errors.password.message}
              </span>
              <span className="register__box__inside--error">
                {hasError ? <p>Sucedio un error, intente más tarde</p> : ""}
              </span>
            </div>
            <Button margin={"btn__secundary--register"} text={"Registrarse"} />
          </form>
          <div className="register__box__inside__link register__box__inside__link--register">
            <h2>
              ¿Tenés una cuenta?{""}
              <Link
                to="/iniciar-sesion"
                className="text-decoration text-decoration--navbar"
              >
                {" "}
                Iniciar Sesión
              </Link>{" "}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  registerUser,
};

const mapStateToProps = (state) => {
  return {
    error: state.error || {},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
