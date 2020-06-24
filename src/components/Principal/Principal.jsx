import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/Principal.scss';

import Logo from '../../assets/static/images/svg/logo.svg'

const Principal = () => (
    <section class="home__view ">
      <figure class=" home__view__figure">
        <img class="home__view__img" src={Logo} alt="Logo de On Focus" />
      </figure>
      <div class="home__view__title">
        <h1 class="slide-in-bottom-3 display__screen__desktop">En la misión de empoderar 100</h1>
        <h1 class="slide-in-bottom-4 display__screen__desktop">millones de personas a través del</h1>
        <h1 class="slide-in-bottom-5 display__screen__desktop">conocimiento.</h1>
        <h1 class="slide-in-bottom-3 display__screen__mobile">Educar 1 millón de personas</h1>
        <h1 class="slide-in-bottom-5 display__screen__mobile">para que logren el éxito.</h1>
      </div>
      <div class="home__view__subtitle">
        <h3 class="slide-in-bottom-6 display__screen__desktop">
          Bienvenido a On Focus Education, la plataforma que viene
        </h3>
        <h3 class="slide-in-bottom-7 display__screen__desktop">
          a cambiar la manera de aprender en linea
        </h3>
        <h3 class="slide-in-bottom-7 display__screen__mobile">
          Bienvenido a On Focus
        </h3>
      </div>
      <button class="btn__primary btn__primary--fix btn__primary--media">Descubrí más</button>
    </section>
)
export default Principal;