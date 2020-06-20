import React from 'react';
import {connect} from 'react-redux';

import Hero from '../components/Utils/Hero';
import MyCourse from '../components/Course/MyCourse';
import Header from '../components/Header'
import Footer from '../components/Footer'


import '../assets/styles/App.scss';

const Courses = () => {
  return(
    <div className="App">
        <Header/> 
        <Hero/> 
        <MyCourse/> 
        <Footer/> 
    </div>

  );
}

export default connect(null,null)(Courses);