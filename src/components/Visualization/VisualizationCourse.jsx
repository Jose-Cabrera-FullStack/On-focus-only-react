import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/Visualization.scss';

import Breadcrumbs from '../Utils/Breadcrumbs';

import CoursesList from '../Visualization/Course/CoursesList';

import ArrowLeft from '../../assets/static/images/svg/arrow-visualization.svg'

const VisualizationCourse = () => (
    <section class="visualization">
        <Breadcrumbs icon={ArrowLeft} onlyMobile={"visualization__navbar"}/>

        <div className="visualization__video display__screen__mobile"></div>
      <div className="visualization__grid">
        <CoursesList/>
        <div className="visualization__video display__screen__desktop"></div>
      </div>
    

    </section>
)
export default VisualizationCourse;