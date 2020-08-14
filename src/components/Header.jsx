import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logoutRequest } from "../actions";

import EmergentMenu from "./Utils/EmergentMenu";
import HamburgerMenuMobile from "./Utils/HamburgerMenuMobile";
import Modal from "./Utils/Modal";

import Login from "../containers/Login";
import Register from "../containers/Register";

import Logo from "../assets/static/images/svg/logo-small.svg";
import Hamburguer from "../assets/static/images/svg/icon-hamburguer.svg";
import Shopping from "../assets/static/images/svg/shopping-car.svg";

import { makeAnimationSlideUpDown } from "../Utils/animatedVisibility";

import "../assets/styles/components/Header.scss";

const Header = (props) => {
  const { user = {} } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    document.cookie = `email=`;
    document.cookie = `name=`;
    document.cookie = `id=`;
    document.cookie = `token=`;
    props.logoutRequest({});
    window.location.href = "/";
  };

  const [isToggled, setToggled] = useState(false);

  const toggleTrueFalse = () => setToggled(!isToggled);

  const [isToggledMenuMobile, setToggledMenuMobile] = useState(false);

  const toggleTrueFalseMenuMobile = () =>
    setToggledMenuMobile(!isToggledMenuMobile);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [openRegister, setOpenRegister] = useState(false);

  const handleOpenRegister = () => {
    setOpenRegister(true);
  };

  const handleCloseRegister = () => {
    setOpenRegister(false);
  };

  const shoppingcar = props.shoppingcar;

  const notification = shoppingcar.length > 0;

  return (
    <header>
      <nav className="navbar">
        <Link to="/">
          <figure className="grid-1">
            <img className="navbar__img" src={Logo} alt="Logo de Focus Minds" />
          </figure>
        </Link>
        {/* MOBILE */}
        <div className="display__screen__mobile">
          <div className="" onClick={toggleTrueFalse}>
            {notification ? (
              <div className="navbar__menu__shopping__cart__notification--mobile">
                <strong className="navbar__menu__shopping__cart__number">
                  {shoppingcar.length}
                </strong>
              </div>
            ) : (
              ""
            )}
            <div>
              <img
                onClick={toggleTrueFalseMenuMobile}
                className="navbar__hamburguer"
                src={Hamburguer}
                alt="Icono de Hamburguesa"
              />
            </div>
          </div>
          {isToggledMenuMobile ? (
            <HamburgerMenuMobile
              onClick={toggleTrueFalseMenuMobile}
              handleOpen={handleOpen}
              handleClose={handleClose}
              open={open}
            />
          ) : (
            ""
          )}
          <img
            onClick={toggleTrueFalse}
            className={
              notification
                ? "navbar__hamburguer__shopping"
                : "navbar__hamburguer__shopping"
            }
            src={Shopping}
            className={
              isToggled
                ? "navbar__hamburguer__shopping__img navbar__hamburguer__shopping__img--toggle"
                : "navbar__hamburguer__shopping__img"
            }
            alt="Icono de Carrito de Compras"
          />
          <EmergentMenu toggle={isToggled} mobile />
        </div>
        {/* MOBILE */}
        <div className="grid-2 navbar__justify__self navbar__query">
          <div className="navbar__query"></div>
          <ol className="navbar__element__list">
            <Link to="/cursos" className="text-decoration">
              <li className="navbar__menu">Descubrir cursos</li>
            </Link>
            <Link to="/sobre-nosotros" className="text-decoration">
              <li className="navbar__menu">About On Focus</li>
            </Link>

            <li
              className="navbar__menu navbar__menu--fix"
              onClick={toggleTrueFalse}
            >
              {notification ? (
                <div
                  className={
                    hasUser
                      ? "navbar__menu__shopping__cart__notification navbar__menu__shopping__cart__notification--user"
                      : "navbar__menu__shopping__cart__notification"
                  }
                >
                  <strong className="navbar__menu__shopping__cart__number">
                    {shoppingcar.length}
                  </strong>
                </div>
              ) : (
                ""
              )}
              <img
                src={Shopping}
                className={
                  isToggled
                    ? "navbar__hamburguer__shopping__img__desktop--toggle"
                    : ""
                }
                alt="Carrito de compras"
              />
            </li>
            <EmergentMenu toggle={isToggled} desktop />
            {hasUser ? (
              <>
                <Link to="/mis-cursos" className="text-decoration">
                  <li className="navbar__menu">Mis Cursos</li>
                </Link>
                <Link to="/mi-perfil" className="text-decoration">
                  <li className="navbar__menu">Mi Perfil</li>
                </Link>
                <li onClick={handleLogout} className="navbar__menu">
                  Cerrar Sesión
                </li>
              </>
            ) : (
              <>
                <li className="navbar__menu ">
                  <button
                    className="btn__primary btn__primary--login btn__primary--login"
                    onClick={handleOpen}
                    type="button"
                  >
                    Iniciar Sesion
                  </button>
                </li>
                <Modal
                  open={open}
                  handleClose={handleClose}
                  body={<Login handleClose={handleClose} />}
                />
                <li className="navbar__menu">
                  <button
                    className="btn__primary btn__primary--login"
                    onClick={handleOpenRegister}
                  >
                    Registrarse
                  </button>
                </li>
                <Modal
                  open={openRegister}
                  handleClose={handleCloseRegister}
                  body={<Register handleClose={handleCloseRegister} />}
                />
              </>
            )}
          </ol>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    shoppingcar: state.shoppingcar || {},
    user: state.user || {},
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
