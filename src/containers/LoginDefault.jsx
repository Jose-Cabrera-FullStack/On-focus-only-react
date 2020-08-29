import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { registerRequest } from "../actions";
import { loginUser } from "../actions";

import Button from "../components/Utils/ButtonArrowRight";

import Logo from "../assets/static/images/img/logo-log-in.png";
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
    props.loginUser(form, "/cursos");
  };

  return (
    <section className="register">
      {/* <Link to="/home">
        <img className="register__img" src={Logo} alt="Logo de On Focus" />
      </Link> */}
      <div className="register__box">
        <div className="register__box__inside">
          <img
            className="register__box__inside__img"
            src={Human}
            alt="Imagen de Humano Saludando"
          />
          <h1>Hola!</h1>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h5>O Inicia Sesión con tu correo electrónico</h5>
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
              <h5>Contraseña</h5>
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
            </div>
            <Button margin={"btn__secundary--register"} text={"Iniciar Sesión"} />
          </form>
        </div>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(Register);
