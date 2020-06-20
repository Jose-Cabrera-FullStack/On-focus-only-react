import React from 'react';
import {connect} from 'react-redux';

import Breadcrumbs from '../components/Utils/Breadcrumbs';
import CourseProgress from '../components/Course/CourseProgress';
import CourseInfoOnlyInfo from '../components/Course/CourseInfoOnlyInfo';
import CourseAbout from '../components/Course/CourseAbout';
import CourseCertificate from '../components/Course/CourseCertificate';
import CourseTeacherInfoVariant from '../components/Course/CourseTeacherInfoVariant';
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
        <div className="buyed__bar flex">
            <p>Sobre este curso</p>
            <p>Clases del curso</p>
        </div>
        <hr className="buyed__bar__bottom"/>
        <CourseInfoOnlyInfo width={'course__information__text__width'}/>
        <p className="buyed__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam. Duis autem vel eum iriure dolor in hendrerit in vulate velit esse molestie consequat.</p>
        <CourseAbout title={title} font={'buyed__font'}/>
        <p className="buyed_see__more">Ver más+</p>
        <CourseCertificate/>

        <p className="buyed__teacher__tittle">Sobre el profesor</p>

        <CourseTeacherInfoVariant/>

        </div>
        <Footer/>
    </div>

  );
}

export default connect(null,null)(CourseBuyed);