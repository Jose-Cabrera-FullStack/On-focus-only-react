import React from 'react';

import '../../assets/styles/components/Podcast.scss';

import Youtube from '../../assets/static/images/svg/youtube-white.svg'


const Hero = () => (
  <section className="podcast__hero podcast__hero--youtube">
  <div className="podcast__hero__inside">
  <h1 className="podcast__hero__title">Lorem ipsum dolor sit amet sed diam nonummy.</h1>
  <div className="flex display__screen__mobile__without__flex">
      <p className="podcast__hero__text">Lorem ipsum dolor sit amet, consectse diam nonummy nibh euismod tincidunt.</p>
      <div className="flex">
          <p className="podcast__hero__text__song podcast__hero__text__song--youtube">Miralo en</p>
          <img className="podcast__hero__img podcast__hero__img--youtube" src={Youtube} alt="ícono de Spotify"/>
      </div>
  </div>
  </div>
</section>
)
export default Hero;