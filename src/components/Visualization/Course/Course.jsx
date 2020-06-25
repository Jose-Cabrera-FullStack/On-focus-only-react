import React from 'react';
import {Link} from 'react-router-dom';

import '../../../assets/styles/components/Visualization.scss';
import '../../../assets/styles/components/Course.scss';

import ArrowUp from '../../../assets/static/images/svg/arrow-up.svg'


const Course = (props) => (
    <div className="visualization__sidebar__list__box flex">
    <div>
    <h5 className="visualization__sidebar__title">Módulo 1 - 15 min</h5>
    <p className="visualization__sidebar__text">Lorem ipsum dolor sit amet.</p>
    </div>
    <img className="visualization__sidebar__arrow" src={ArrowUp} alt="Flecha hacia arriba"/>
  </div>
)
export default Course;