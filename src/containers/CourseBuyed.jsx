import React from 'react';
import {connect} from 'react-redux';

import Breadcrumbs from '../components/Utils/Breadcrumbs';

import CourseProgress from '../components/Course/CourseProgress';
import CourseInfoOnlyInfo from '../components/Course/CourseInfoOnlyInfo';
import CourseAbout from '../components/Course/CourseAbout';
import CourseCertificate from '../components/Course/CourseCertificate';
import CourseTeacherInfoVariant from '../components/Course/CourseTeacherInfoVariant';
import BuyedCourse from '../components/Course/Mobile/BuyedCourse';

import Header from '../components/Header'
import Footer from '../components/Footer'

import '../assets/styles/App.scss';
import '../assets/styles/components/Buyed.scss';

import UI from '../assets/static/images/img/buyed-image.png';

const CourseBuyed = () => {
  const title = "¿Qué incluye este curso?"
  return(
    <div className="App">
        <Header/>
        <img className="buyed__progress__img display__screen__mobile" src={UI} alt="Foto del Curso Comprado"/>

        <div className="buyed">
        <Breadcrumbs onlyDesktop={"display__screen__desktop"}/>
        <CourseProgress onlyDesktop={"display__screen__desktop"}/>
        <div className="buyed__bar flex display__screen__desktop">
            <p>Sobre este curso</p>
            <p>Clases del curso</p>
        </div>
        <hr className="buyed__bar__bottom display__screen__desktop"/>
        <CourseInfoOnlyInfo width={'course__information__text__width'} onlyDesktop={"display__screen__desktop"}/>
        <p className="buyed__text display__screen__desktop">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam. Duis autem vel eum iriure dolor in hendrerit in vulate velit esse molestie consequat.</p>
        <CourseAbout title={title} font={'buyed__font'} onlyDesktop={"display__screen__desktop"}/>
        <p className="buyed_see__more display__screen__desktop">Ver más+</p>
        <CourseCertificate onlyDesktop={"display__screen__desktop"}/>

        <p className="buyed__teacher__tittle display__screen__desktop">Sobre el profesor</p>
        
        <BuyedCourse onlyMobile={"display__screen__mobile"}/>
        
        <BuyedCourse onlyMobile={"display__screen__mobile"}/>
        
        <CourseTeacherInfoVariant onlyDesktop={"display__screen__desktop"}/>

        </div>
        <Footer onlyDesktop={"display__screen__desktop"}/>
    </div>

  );
}

export default connect(null,null)(CourseBuyed);