import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/Visualization.scss';

import Breadcrumbs from '../Utils/Breadcrumbs';

import CoursesList from '../Visualization/Course/CoursesList';
import Video from './Video/Video';

import ArrowLeft from '../../assets/static/images/svg/arrow-visualization.svg'

const VisualizationCourse = () => (
    <section className="visualization">
        <Breadcrumbs icon={ArrowLeft} onlyMobile={"visualization__navbar"}/>

        <Video display={"display__screen__mobile"}/>

      <div className="visualization__grid">
        <CoursesList/>

        <Video display={"display__screen__desktop"}/>
      </div>
    

    </section>
)
export default VisualizationCourse;