import React from 'react';
import {connect} from 'react-redux';

import Hero from '../components/Course/Hero';
import Discovery from '../components/Principal/Discovery';
import HowWeTeach from '../components/Principal/HowWeTeach';
import AboutUs from '../components/Principal/AboutUs';

import '../assets/styles/App.scss';

const Home = () => {
  return(
    <div className="App">

        <Hero/>
        <Discovery/>
        <AboutUs/>
   
    </div>

  );
}

export default connect(null,null)(Home);