import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../../assets/styles/components/Header.scss";

import Logo from "../../assets/static/images/svg/logo-small.svg";
import Arrow from "../../assets/static/images/svg/arrow-right-hamburger-mobile.svg";

import Login from "../../containers/Login";

import ModalLogin from "./Modal";

const HamburgerMenuMobile = ({ onClick, handleOpen, handleClose, open }) => {
  return (
    <>
      <div className="navbar__hamburguer__toggle">
        <div>
          <Link to="/">
            <img
              className="navbar__hamburguer__toggle__logo"
              src={Logo}
              alt="Icono de Focus Minds"
            />
          </Link>
          <img
            className="navbar__hamburguer__toggle__arrow"
            onClick={onClick}
            src={Arrow}
            alt="Icono de Flecha derecha"
          />
        </div>
        <div className="navbar__hamburguer__toggle__menu">
          <ol className="navbar__hamburguer__toggle__menu__list">
            <Link to="/cursos" className="text-decoration">
              <li>Descubrir</li>
            </Link>
            <Link to="/sobre-nosotros" className="text-decoration">
              <li>About On Focus</li>
            </Link>
            <li className="navbar__menu ">
              <button
                className="btn__primary btn__primary--login btn__primary--login"
                onClick={handleOpen}
                type="button"
              >
                Iniciar Sesion
              </button>
              <ModalLogin
                open={open}
                handleClose={handleClose}
                body={<Login handleClose={handleClose} />}
              />
            </li>
            <li>
              <Link to="/registrarse">
                <button className="btn__primary btn__primary--login">
                  Registrarse
                </button>
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default connect(null, null)(HamburgerMenuMobile);
