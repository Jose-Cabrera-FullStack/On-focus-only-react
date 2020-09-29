import React from "react";
import { Link } from "react-router-dom";
import Human from "../assets/static/images/svg/human-hello.svg";
import "../assets/styles/components/Register.scss";

const Register = (props) => {
  return (
    <section className="register">
      <div className="register__box">
        <div className="register__box__inside register__box__inside--without_register">
          <div className="flex display__screen__mobile__without__flex">
            <img
              className="register__box__inside__img"
              src={Human}
              alt="Imagen de Humano Saludando"
            />
            <div>
              <h1>Hola!</h1>
              <h2>Debes verificar tu cuenta</h2>
            </div>
          </div>

          <div>
            <h3>
              Revisa tu correo para poder verificar y confirmar tu correo
              eléctronico y así poder finalizar tu registro.
            </h3>
          </div>

          <div>
            <p className="register__box__inside__text">
              Si tuviste algún problema durante el proceso de compra, envianos
              tu consulta a{" "}
              <Link
                className="text-decoration text-decoration--navbar"
                to="/contactanos"
              >
                ayuda@onfocus.com
              </Link>{" "}
              y te respondemos a la brevedad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
