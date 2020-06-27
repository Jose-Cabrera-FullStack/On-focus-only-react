import React from 'react';
import {connect} from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/AboutUs/Hero';
import Future from '../components/AboutUs/Future';
import Map from '../components/AboutUs/Map';
import Knowledge from '../components/AboutUs/Knowledge';
import Tweets from '../components/AboutUs/Tweets';
import Phrase from '../components/AboutUs/Phrase';
import HeroDown from '../components/Teacher/HeroDown';

import Logo from '../assets/static/images/svg/logo-black-circule.svg';

import '../assets/styles/App.scss';

const AboutUs = () => {
  return(
    <div className="App">
        <Header/> 
        <Hero/> 
        <Future icon={Logo}/> 
        <Map/> 
        <Knowledge/> 
        <Tweets/> 
        <Phrase/> 
        <HeroDown/> 
        <Footer/> 

    </div>

  );
}

export default connect(null,null)(AboutUs);