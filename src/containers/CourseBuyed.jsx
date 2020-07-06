import React, { useState } from 'react';
import {connect} from 'react-redux';

import Breadcrumbs from '../components/Utils/Breadcrumbs';

import CourseProgress from '../components/Course/CourseProgress';

import CourseAboutCourse from '../components/Course/CourseAboutCourse';


import AboutCourseAndClasses from '../components/Course/Select/AboutCourseAndClasses';
import Module from '../components/Course/Module/Module'


import Header from '../components/Header'
import Footer from '../components/Footer'

import '../assets/styles/App.scss';
import '../assets/styles/components/Buyed.scss';

import UI from '../assets/static/images/img/buyed-image.png';

const CourseBuyed = () => {
  const title = "¿Qué incluye este curso?"

  const [isSwitch, setSwitch] = useState("");
    
  const AboutThisCourse = () => setSwitch("");
  
  const CourseClasses = () => setSwitch("Classes");
  
  
  const PayMethod = (isSwitch) =>{
      switch(isSwitch) {
  
          case "Classes":  return (
            <div>
              <Module buyed id={'2'} text={'hola'} duration={'45 min'}/>
              <Module buyed id={'2'} text={'hola'} duration={'45 min'}/>
              <Module buyed id={'2'} text={'hola'} duration={'45 min'}/>
            </div>)
          default :  return <CourseAboutCourse/>;
          }
      }
  
  return(
    <div className="App">
        <Header/>
        <img className="buyed__progress__img display__screen__mobile" src={UI} alt="Foto del Curso Comprado"/>

        <div className="buyed">
        <Breadcrumbs onlyDesktop={"display__screen__desktop"}/>
        <CourseProgress onlyDesktop={"display__screen__desktop"}/>
        
        <AboutCourseAndClasses isSwitch={isSwitch} methodAbout={AboutThisCourse} methodClasses={CourseClasses}/>

        <hr className="buyed__bar__line display__screen__desktop"/>

        {PayMethod(isSwitch)}



        </div>
        <Footer onlyDesktop={"display__screen__desktop"}/>
    </div>

  );
}

export default connect(null,null)(CourseBuyed);