import React from 'react';
import {connect} from 'react-redux';

import Hero from '../components/Course/Hero';
import Discovery from '../components/Principal/Discovery';
import AboutUs from '../components/Principal/AboutUs';

import '../assets/styles/App.scss';

const Courses = () => {
  return(
    <div className="App">

        <Hero/>
        <Discovery/>
        <AboutUs/>
   
    </div>

  );
}

export default connect(null,null)(Courses);