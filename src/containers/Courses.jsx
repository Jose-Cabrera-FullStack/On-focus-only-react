import React from 'react';
import {connect} from 'react-redux';

import Hero from '../components/Course/Hero';
import Discovery from '../components/Principal/Discovery';
import AboutUs from '../components/Principal/AboutUs';
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../assets/styles/App.scss';

const Courses = () => {
  return(
    <div className="App">

        <Header/>
        <Hero/>
        <Discovery/>
        <AboutUs/>
        <Footer/>
   
    </div>

  );
}

export default connect(null,null)(Courses);