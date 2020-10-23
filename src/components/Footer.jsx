import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/Footer.scss";

import Logo from "../assets/static/images/svg/logo.svg";
import Message from "../assets/static/images/svg/message.svg";

import ScrollArrowUp from "./Utils/ScrollArrowUp";

const year = new Date().getFullYear();

const politicy = {
  pathname: "/politicas",
  param: "politicy",
};
const term = {
  pathname: "/politicas",
  param: "Terminos",
};
const help = {
  pathname: "/politicas",
  param: "Centro",
};

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
                  <a
                    href={`https://www.youtube.com/`}
                    className="iconbtn iconbtn--youtube footer__socials--youtube"
                  ></a>
                </li>
                <li className="s4">
                  <a
                    href={`https://www.facebook.com/`}
                    className="iconbtn iconbtn--facebook footer__socials--facebook"
                  ></a>
                </li>
                <li className="s4">
                  <a
                    href={`https://www.instagram.com/`}
                    className="iconbtn iconbtn--instagram footer__socials--instagram"
                  ></a>
                </li>
              </ol>
            </div>
          </div>

          <div className="footer__logo__focus display__screen__desktop">
            <figure>
              <img className="footer__logo__mobile" src={Logo} alt="on focus" />
            </figure>
          </div>

          <div className="footer__container__right">
            <div className="footer__container__right--mobile flex">
              <div className="footer__container__right--fix">
                <ol>
                  <h5>Legales</h5>
                  <Link to={politicy}>
                    <li>Politicas de Cookie</li>
                  </Link>
                  <Link to={term}>
                    <li>Centro de Ayuda</li>
                  </Link>
                  <Link to={help}>
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
        <p>All Rights Reserved {year}.</p>
        <div className="footer__help footer__help--mobile display__screen__mobile">
          <img src={Message} alt="Mensaje" />
          <p>ayuda@onfocus.com</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
