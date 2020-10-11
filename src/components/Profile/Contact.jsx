import React from "react";
import { connect } from "react-redux";

import "../../assets/styles/components/Data.scss";
import Message from "../../assets/static/images/svg/send-message.svg";

import Form from "./ContactUs/Form";
import SuccessMessage from "../Utils/SuccessMessage";

const Data = (props) => {
  const hasMessage = Object.keys(props.emailMessage).length > 0;
  return (
    <section className="data">
      <p className="data__text">
        Si tienes alguna consulta o simplemente quieres realizar un contacto con
        nosotros, la mejor manera de hacerlo es via mail a hola@onfocus.com
      </p>
      <p className="data__text">
        Respondemos todos los correos en un lapso menor a 24 horas, si es fin de
        semana, ten en cuenta que la respuesta pueda demorar un poco más.
      </p>
      <p className="data__text">
        De todas maneras, se cual sea la consulta, vamos a encontrarle una
        solución a tu caso.
      </p>
      <h1>Lorem ipsum dolor sit amet.</h1>

      <div className={"flex" + " " + props.onlyMobile}>
        <div>
          <Form />
          {hasMessage ? (
            props.emailMessage.success === true ? (
              <SuccessMessage text={"Su mensaje ha sido enviado. ¡Gracias!"} />
            ) : (
              <SuccessMessage
                text={
                  "No pudimos recibir su mensaje. Puede intentar nuevamente, por favor."
                }
                fail
              />
            )
          ) : (
            ""
          )}
        </div>
        <div className="data__right">
          <strong className="data__right__title">Oficina de contacto.</strong>
          <p>El Salvador 5218,C1414BPV Buenos Aires, Argentina.</p>
          <div className="flex">
            <ol className="data__right__socials flex">
              <li>
                <a href={`https://www.youtube.com/`}>
                  <span
                    className="contact__socials--youtube"
                    alt="Youtube"
                  ></span>
                </a>
              </li>
              <li>
                <a href={`https://www.facebook.com/`}>
                  <span
                    className="contact__socials--facebook"
                    alt="Facebook"
                  ></span>
                </a>
              </li>
              <li>
                <a href={`https://www.instagram.com/`}>
                  <span
                    className="contact__socials--instagram"
                    alt="Instagram"
                  ></span>
                </a>
              </li>
              <li>
                <a href={`https://www.linkedin.com/`}>
                  <span
                    className="contact__socials--linkedin"
                    alt="Linkedin"
                  ></span>
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    emailMessage: state.emailMessage || {},
  };
};
export default connect(mapStateToProps, null)(Data);
