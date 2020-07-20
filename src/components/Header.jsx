import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logoutRequest } from "../actions";

import EmergentMenu from "./Utils/EmergentMenu";
import ModalLogin from "./Utils/Modal";

import Login from "../containers/Login";

import Logo from "../assets/static/images/svg/logo-small.svg";
import Hamburguer from "../assets/static/images/svg/icon-hamburguer.svg";
import Shopping from "../assets/static/images/svg/shopping-car.svg";

import "../assets/styles/components/Header.scss";

const Header = (props) => {
  const [isToggled, setToggled] = useState(false);

  const toggleTrueFalse = () => setToggled(!isToggled);

  // const { user= {} } = props;
  // const hasUser = Object.keys(user).length  >  0;

  // const handleLogout = () => {
  //   props.logoutRequest({});
  // };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const shoppingcar = props.shoppingcar;

  const notification = shoppingcar.length > 0;

  return (
    <header>
      <nav className="navbar">
        <Link to="/">
          <figure className="grid-1">
            <img className="navbar__img" src={Logo} alt="" />
          </figure>
        </Link>
        <img className="navbar__hamburguer" src={Hamburguer} alt="" />
        <img className="navbar__hamburguer__shopping" src={Shopping} alt="" />
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
                <div className="navbar__menu__shopping__cart__notification">
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
                  notification
                    ? "navbar__menu__shopping__cart"
                    : "navbar__menu__shopping__cart navbar__menu__shopping__cart--fix"
                }
                alt="Carrito de compras"
              />
            </li>
            <EmergentMenu toggle={isToggled} />
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
            <li className="navbar__menu">
              <Link to="/registrarse">
                <button className="btn__primary btn__primary--login">
                  Registrarse
                </button>
              </Link>
            </li>
          </ol>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    shoppingcar: state.shoppingcar || {},
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, null)(Header);
