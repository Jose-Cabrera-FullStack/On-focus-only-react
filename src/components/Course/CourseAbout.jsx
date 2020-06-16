import React from 'react';

import '../../assets/styles/components/CoursePlus.scss';
import Course from '../../assets/static/images/img/about-this-course.png';


const CourseAbout = (props) => {
    
    return(
        <div class="couse__about">
            <h1>{props.title ? props.title:'Sobre este curso'}</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam. Duis autem vel eum iriure dolor in hendrerit in vulpu tate velit esse molestie consequat.</p>
            <img src={Course} alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
        </div>
)}
export default CourseAbout;
    