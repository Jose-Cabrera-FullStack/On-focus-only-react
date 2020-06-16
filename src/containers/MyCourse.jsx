import React from 'react';
import {connect} from 'react-redux';

import Hero from '../components/Utils/Hero';
import MyCourse from '../components/Course/MyCourse';


import '../assets/styles/App.scss';

const Courses = () => {
  return(
    <div className="App">
        <Hero/> 
        <MyCourse/> 
    </div>

  );
}

export default connect(null,null)(Courses);