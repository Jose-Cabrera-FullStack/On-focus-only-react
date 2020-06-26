import React from 'react';
import {Link} from 'react-router-dom';

import '../assets/styles/components/Footer.scss';

import Logo from '../assets/static/images/svg/logo.svg'
import Message from '../assets/static/images/svg/message.svg'
import Arrow from '../assets/static/images/svg/arrow-up.svg'

const Footer = (props) => {
      
  return(
    <>
<footer class={"footer"+ " " + props.onlyDesktop}>
      <div class="footer__container">
        
      <div className="display__screen__mobile">
          <figure>
            <img
              class="footer__logo"
              src={Logo}
              alt="on focus"
            />
          </figure>
        </div>
        
        <div>
          <ol class="footer__container__left">
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
            <ol class="footer__container__left--fix">
              <li>
              <span className="footer__socials--youtube" alt="Youtube"></span>
              </li>
              <li>
              <span className="footer__socials--facebook" alt="Facebook"></span>
              </li>
              <li>
              <span className="footer__socials--instagram" alt="Instagram"></span>
              </li>
            </ol>
          </div>
        </div>

        <div className="display__screen__desktop">
          <figure>
            <img
              class="footer__logo__mobile"
              src={Logo}
              alt="on focus"
            />
          </figure>
        </div>

        <div class="footer__container__right">
          <div class="flex">
            <div>
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
              <div class="footer__help">
                <img src={Message} alt="Mensaje" />
                <p>ayuda@onfocus.com</p>
              </div>
            </div>
            <img
            id="footer__arrow"
            class="footer__arrow"
            src={Arrow}
            alt="Flecha hacia arriba"
            />
          </div>
        </div>
      </div>
    </footer>
    <div class={"footer__reserved"+ " " + props.onlyDesktop}>
      <p>All Rights Reserved 2019.</p>
    </div>
    </>
)};

export default Footer;