import React from 'react';
import {connect} from 'react-redux';

import Hero from '../components/AboutUs/Hero';
import Future from '../components/AboutUs/Future';
import Map from '../components/AboutUs/Map';
import Knowledge from '../components/AboutUs/Knowledge';
import Tweets from '../components/AboutUs/Tweets';
import Phrase from '../components/AboutUs/Phrase';
import HeroDown from '../components/Teacher/HeroDown';

import '../assets/styles/App.scss';

const AboutUs = () => {
  return(
    <div className="App">
        <Hero title={'Contacto'}/> 
        <Future/> 
        <Map/> 
        <Knowledge/> 
        <Tweets/> 
        <Phrase/> 
        <HeroDown/> 

    </div>

  );
}

export default connect(null,null)(AboutUs);