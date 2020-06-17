import React from 'react';
import {connect} from 'react-redux';

import Hero from '../components/Teacher/Hero';
import Points from '../components/Teacher/Points';
import TeacherFAQ from '../components/Teacher/FAQ';
import TeacherCourse from '../components/Teacher/TeacherCourse';

import '../assets/styles/App.scss';

const Teacher = () => {
    let grid = 'grid-column-2'

  return(
    <div className="App">
        <Hero/>
        <Points grid={grid}/>
        <TeacherFAQ/>
        <TeacherCourse/>
    </div>

  );
}

export default connect(null,null)(Teacher);