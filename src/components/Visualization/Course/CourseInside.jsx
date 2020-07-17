import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import '../../../assets/styles/components/Visualization.scss';
import '../../../assets/styles/components/Course.scss';

const CourseInside = ({ watching, title, status }) => (
    <div className={watching ? "visualization__sidebar__inside visualization__sidebar__inside--watching" :"visualization__sidebar__inside"}>
        <h5 className="visualization__sidebar__inside__title">{title ? title : "Video 1 - Lorem ipsum dolor sit amet."}</h5>
        <p className="visualization__sidebar__inside__text">{status ? status : "Completa"}</p>
    </div>
)
export default CourseInside;