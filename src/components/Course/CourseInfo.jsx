import React from 'react';
import {Link} from 'react-router-dom';

import CourseInfoOnlyInfo from './CourseInfoOnlyInfo'
import CourseAbout from './CourseAbout'
import CourseSaveMoney from './CourseSaveMoney'

import Information from '../Course/InformationCourse/Information'
import SmallVideo from '../Visualization/SmallVideo'

import '../../assets/styles/components/CoursePlus.scss';

const CourseInfo = (props) => (
    <section class="course">
        <Information OnlyDesktop={"display__screen__desktop"}/>      
        <div class="flex">
            <SmallVideo OnlyDesktop={"display__screen__desktop"}/>      
            <CourseSaveMoney/>      
        </div>
    <h1 className="course__info__title">Informacion</h1>
    <CourseInfoOnlyInfo onlyMobile={'display__screen__mobile__without__flex'} width={'course__information__text__width'} logoMobile={'course__logo__mobile'} margin={'course__logo__mobile__margin'}/>   
    <CourseAbout/>   
</section>
)
export default CourseInfo;