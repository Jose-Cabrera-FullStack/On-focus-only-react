import React from 'react';
import {connect} from 'react-redux';

import Breadcrumbs from '../components/Utils/Breadcrumbs';
import CourseProgress from '../components/Course/CourseProgress';
import CourseInfoOnlyInfo from '../components/Course/CourseInfoOnlyInfo';
import CourseAbout from '../components/Course/CourseAbout';
import CourseCertificate from '../components/Course/CourseCertificate';
import CourseTeacherInfo from '../components/Course/CourseTeacherInfo';
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../assets/styles/App.scss';
import '../assets/styles/components/Buyed.scss';

const CourseBuyed = () => {
  const title = "¿Qué incluye este curso?"
  return(
    <div className="App">
        <Header/>
        <div className="buyed">
 
        <Breadcrumbs/>
        <CourseProgress/>
        <div className="flex">
            <p>Sobre este curso</p>
            <p>Clases del curso</p>
        </div>
        <CourseInfoOnlyInfo/>
        <CourseAbout title={title}/>
        <CourseCertificate/>
        <CourseTeacherInfo/>

        </div>
        <Footer/>
    </div>

  );
}

export default connect(null,null)(CourseBuyed);