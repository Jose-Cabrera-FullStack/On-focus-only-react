import React from 'react';
import {Link} from 'react-router-dom';

import '../../../assets/styles/components/Visualization.scss';
import '../../../assets/styles/components/Course.scss';

import Course from './Course';

const CourseList = (props) => (
<div className="visualization__sidebar">
          <ol>
            <li className="visualization__sidebar__list">
             <Course/>
            </li>
            <li className="visualization__sidebar__list">
            <Course/>
            </li>
            <li className="visualization__sidebar__list">
            <Course/>
            </li>
            <li className="visualization__sidebar__list">
            <Course/>
            </li>
            <li className="visualization__sidebar__list">
            <Course/>
            </li>
            <li className="visualization__sidebar__list">
            <Course/>
            </li>
            <li className="visualization__sidebar__list">
            <Course/>
            </li>
          </ol>
        </div>
)
export default CourseList;