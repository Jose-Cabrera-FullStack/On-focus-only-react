import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import '../../../assets/styles/components/Visualization.scss';
import '../../../assets/styles/components/Course.scss';

import CourseInside from './CourseInside'

import ArrowUp from '../../../assets/static/images/svg/arrow-up.svg'
import ArrowDown from '../../../assets/static/images/svg/arrow-down-gold.svg'


const Course = ({ title, text }) => {
  
  const [isToggle, setToggled] = useState(false)

  const changeToggle = () => setToggled(!isToggle)

  return(
    <>
  <li className="visualization__sidebar__list" onClick={changeToggle}>    
      <div className="visualization__sidebar__list__box flex">
      <div>
      <h5 className="visualization__sidebar__title">Módulo 1 - 15 min</h5>
      <p className="visualization__sidebar__text">Lorem ipsum dolor sit amet.</p>
      </div>
      <img className={isToggle ? "visualization__sidebar__arrow--up": "visualization__sidebar__arrow"} src={isToggle ? ArrowUp: ArrowDown} alt="Flecha hacia arriba"/>
    </div>
  </li>
    {isToggle ? 
      <>
        <CourseInside watching/>
        <CourseInside/>
        <CourseInside/>
      </>
    : ""}
    </>
)}
export default Course;