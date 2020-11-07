import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { logoutRequest, getCountry } from "../actions";

import EmergentMenu from "./Utils/EmergentMenu";
import HamburgerMenuMobile from "./Utils/HamburgerMenuMobile";
import Modal from "./Utils/Modal";

import Logo from "../assets/static/images/svg/logo-small.svg";
import Hamburguer from "../assets/static/images/svg/icon-hamburguer.svg";
import Shopping from "../assets/static/images/svg/shopping-car.svg";

import "../assets/styles/components/Header.scss";

const countryList = [
  { id: "AR", name: "Argentina", currency: "AR$" },
  { id: "US", name: "EEUU", currency: "US$" },
  { id: "SP", name: "España", currency: "EU€" },
  { id: "MX", name: "México", currency: "MX$" },
];


const Header = (props) => {
  const { user = {} } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
    return props.history.push("/home");
  };

  const [isToggled, setToggled] = useState(false);

  const toggleTrueFalse = () => setToggled(!isToggled);

  const [openHamburguer, setOpenHamburguer] = useState(false);

  const handleOpenHamburguer = () => {
    setOpenHamburguer(true);
  };

  const handleCloseHamburguer = () => {
    setOpenHamburguer(false);
  };

  const shoppingcar = props.shoppingcar;

  const notification = shoppingcar.length > 0;

  const [country, setCountry] = useState(props.country);

  useEffect(() => {
    props.getCountry(country);
  },{});

  const handleCountryValue = (event) => {
    countryList.map((item) => {
      if (item.id === event.target.value) {
        setCountry(item);
      }
    });
  };
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
                onClick={handleOpenHamburguer}
                className="navbar__hamburguer"
                src={Hamburguer}
                alt="Icono de Hamburguesa"
              />
            </div>
          </div>
          <Modal
            open={openHamburguer}
            handleClose={handleCloseHamburguer}
            body={
              <HamburgerMenuMobile
                handleLogout={handleLogout}
                onClick={handleCloseHamburguer}
              />
            }
          />
          <Link to="/carrito">
            <img
              onClick={toggleTrueFalse}
              className={
                notification
                  ? "navbar__hamburguer__shopping"
                  : "navbar__hamburguer__shopping"
              }
              src={Shopping}
              className={"navbar__hamburguer__shopping__img"}
              alt="Icono de Carrito de Compras"
            />
          </Link>
        </div>
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

            <EmergentMenu toggle={isToggled} desktop location={props.history} />
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
                  <Link to="/iniciar-sesion">
                    <button className="btn__primary btn__primary--login btn__primary--login">
                      Iniciar Sesion
                    </button>
                  </Link>
                </li>

                <li className="navbar__menu">
                  <Link to="/registrarse" className="text-decoration">
                    <button className="btn__primary btn__primary--login">
                      Registrarse
                    </button>
                  </Link>
                </li>
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
    country: state.country || countryList[0],
  };
};

const mapDispatchToProps = {
  logoutRequest,
  getCountry,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
