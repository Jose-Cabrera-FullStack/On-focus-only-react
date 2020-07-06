import React from 'react';

import '../../../assets/styles/components/CoursePlus.scss';
import Course from './Course'

const AllCourse = ({}) => {
    return(
        <>
            <Course progress={100}/>
            <Course progress={100}/>
            <Course/>
        </>
)}
export default AllCourse;