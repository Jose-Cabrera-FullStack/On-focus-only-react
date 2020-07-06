import React from 'react';

import '../../assets/styles/components/Course.scss';

const OtherCourse = ({progress}) => {
    
    const width = progress || 10
    return (
        <div className="buyed__progress__bar">
            <div className="buyed__progress__bar__completed" style={{width:`${width}%`}}></div>
        </div>
)}
export default OtherCourse;