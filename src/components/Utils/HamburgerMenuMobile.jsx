import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "../../assets/styles/components/Header.scss";

import Logo from "../../assets/static/images/svg/logo-small.svg";
import Arrow from "../../assets/static/images/svg/arrow-right-hamburger-mobile.svg";
import ArrowInside from "../../assets/static/images/svg/arrow-right-hamburger-mobile-inside.svg";

import Login from "../../containers/Login";

import ModalLogin from "./Modal";

const HamburgerMenuMobile = ({
  onClick,
  handleOpen,
  handleClose,
  open,
  user,
}) => {
  const hasUser = Object.keys(user).length > 0;
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
            <Link to="/cursos" className="text-decoration flex">
              <li>Estudiá</li>
              <img
                className="navbar__hamburguer__toggle__menu__arrow"
                src={ArrowInside}
                alt="Ícono de Flecha"
              />
            </Link>
            <Link to="/sobre-nosotros" className="text-decoration flex">
              <li>Inspirate</li>
              <img
                className="navbar__hamburguer__toggle__menu__arrow"
                src={ArrowInside}
                alt="Ícono de Flecha"
              />
            </Link>
            <Link to="/sobre-nosotros" className="text-decoration flex">
              <li>Acerca de On Focus</li>
            </Link>
            <Link to="/contactanos" className="text-decoration flex">
              <li>Contacto</li>
            </Link>
            <Link to="/enseña" className="text-decoration flex">
              <li>Quiero dar un curso</li>
            </Link>
            {hasUser ? (
              ""
            ) : (
              <div className="navbar__menu__mobile__buttons">
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
              </div>
            )}
          </ol>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user || {},
  };
};

export default connect(mapStateToProps, null)(HamburgerMenuMobile);
