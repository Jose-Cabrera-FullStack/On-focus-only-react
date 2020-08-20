import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/Footer.scss";

import Logo from "../assets/static/images/svg/logo.svg";
import Message from "../assets/static/images/svg/message.svg";

import ScrollArrowUp from "./Utils/ScrollArrowUp";

const Footer = (props) => {
  return (
    <>
      <footer className={"footer" + " " + props.onlyDesktop}>
        <div className="footer__container">
          <div className="display__screen__mobile">
            <figure>
              <img className="footer__logo" src={Logo} alt="on focus" />
            </figure>
          </div>

          <div>
            <ol className="footer__container__left">
              <h5>Accesos</h5>
              <Link to="/home">
                <li>Home</li>
              </Link>
              <Link to="/sobre-nosotros">
                <li>About On Focus</li>
              </Link>
              <Link to="/cursos">
                <li>Cursos</li>
              </Link>
              <Link to="/contactanos">
                <li>Contacto</li>
              </Link>
              <Link to="/enseña">
                <li>Quiero dar un curso</li>
              </Link>
            </ol>
            <div className="footer__socials__network">
              <ol className="footer__container__left--fix">
                <li className="s4">
                  <a href="#" className="iconbtn footer__socials--youtube"></a>
                </li>
                <li>
                  <a href={`https://www.youtube.com/`}>
                    <span
                      className="footer__socials--youtube"
                      alt="Youtube"
                    ></span>
                  </a>
                </li>
                <li>
                  <a href={`https://www.facebook.com/`}>
                    <span
                      className="footer__socials--facebook"
                      alt="Facebook"
                    ></span>
                  </a>
                </li>
                <li>
                  <a href={`https://www.instagram.com/`}>
                    <span
                      className="footer__socials--instagram"
                      alt="Instagram"
                    ></span>
                  </a>
                </li>
              </ol>
            </div>
          </div>

          <div className="display__screen__desktop">
            <figure>
              <img className="footer__logo__mobile" src={Logo} alt="on focus" />
            </figure>
          </div>

          <div className="footer__container__right">
            <div className="footer__container__right--mobile flex">
              <div className="footer__container__right--fix">
                <ol>
                  <h5>Legales</h5>
                  <Link to="/politicas">
                    <li>Politicas de Cookie</li>
                  </Link>
                  <Link to="/politicas">
                    <li>Centro de Ayuda</li>
                  </Link>
                  <Link to="/politicas">
                    <li to="terminos-y-condiciones">
                      Términos y <br />
                      condiciones
                    </li>
                  </Link>
                </ol>
                <div className="footer__help display__screen__desktop">
                  <img src={Message} alt="Mensaje" />
                  <p>ayuda@onfocus.com</p>
                </div>
              </div>
              <ScrollArrowUp />
            </div>
          </div>
        </div>
      </footer>
      <div className={"footer__reserved" + " " + props.onlyDesktop}>
        <p>All Rights Reserved 2019.</p>
        <div className="footer__help footer__help--mobile display__screen__mobile">
          <img src={Message} alt="Mensaje" />
          <p>ayuda@onfocus.com</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
