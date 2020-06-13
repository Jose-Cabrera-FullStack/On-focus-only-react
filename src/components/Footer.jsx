import React from 'react';
import {Link} from 'react-router-dom';

import '../assets/styles/components/Footer.scss';

import Youtube from '../assets/static/images/svg/youtube.svg'
import Facebook from '../assets/static/images/svg/facebook.svg'
import Instagram from '../assets/static/images/svg/instagram.svg'
import Logo from '../assets/static/images/svg/logo.svg'
import Message from '../assets/static/images/svg/message.svg'
import Arrow from '../assets/static/images/svg/arrow-up.svg'

const Footer = () => {
  var mybutton = document.getElementById("footer__arrow");
      
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return(
    <>
<footer class="footer">
      <div class="footer__container">
        <div>
          <ol class="footer__container__left">
            <li><h5>Accesos</h5></li>
            <li>Home</li>
            <li>About On Focus</li>
            <li>Cursos</li>
            <li>Contacto</li>
            <li>Quiero dar un curso</li>
          </ol>
          <ol class="footer__container__left--fix">
            <li>
              <img
                class="footer__socials footer__socials--youtube"
                src={Youtube}
                alt="youtube"
              />
            </li>
            <li>
              <img
                class="footer__socials footer__socials--facebook"
                src={Facebook}
                alt="facebook"
              />
            </li>
            <li>
              <img
                class="footer__socials footer__socials--instagram"
                src={Instagram}
                alt="instagram"
              />
            </li>
          </ol>
        </div>

        <div>
          <figure>
            <img
              class="footer__logo"
              src={Logo}
              alt="on focus"
            />
          </figure>
        </div>

        <div class="footer__container__right">
          <div class="flex">
            <div>
              <ol>
                <li><h5>Legales</h5></li>
                <li>Politicas de Cookie</li>
                <li>Centro de Ayuda</li>
                <li>
                  Términos y <br />
                  condiciones
                </li>
              </ol>
              <div class="footer__help">
                <img src={Message} alt="Mensaje" />
                <p>ayuda@onfocus.com</p>
              </div>
            </div>
            <img
            onclick={topFunction()}
            id="footer__arrow"
            class="footer__arrow"
            src={Arrow}
            alt="Flecha hacia arriba"
            />
          </div>
        </div>
      </div>
    </footer>
    <div class="footer__reserved">
      <p>All Rights Reserved 2019.</p>
    </div>
    </>
)};

export default Footer;