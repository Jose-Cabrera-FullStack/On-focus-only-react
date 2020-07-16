import React from 'react';
import {Link} from 'react-router-dom';

import '../../../assets/styles/components/Visualization.scss';
import '../../../assets/styles/components/Course.scss';

const CourseInside = ({ watching }) => (
    <div className={watching ? "visualization__sidebar__inside visualization__sidebar__inside--watching" :"visualization__sidebar__inside"}>
        <h5 className="visualization__sidebar__inside__title">Video 1 - Lorem ipsum dolor sit amet.</h5>
        <p className="visualization__sidebar__inside__text">Completa</p>
    </div>
)
export default CourseInside;