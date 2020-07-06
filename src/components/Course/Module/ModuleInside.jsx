import React,{useState} from 'react';

import '../../../assets/styles/components/Buyed.scss';

import Incomplete from '../../../assets/static/images/svg/icon-course-incomplete.svg'

const ModuleInside = ({text,isToggled,buyed}) => {
console.log()
    return(
        
        <div className={isToggled ? "course__module__element__inside":"display-none"}>
            {buyed ? 
            <div className="flex">
                <img className="course__module__element__inside__icon" src={Incomplete} alt="Ícono de Curso incompleto"/>
                <div className="course__module__element__inside__right">
                    <h5>Video 1 - Lorem ipsum dolor sit amet.</h5>
                    <i>Completa</i>
                </div>
            </div>
            :
            <p>{text}</p>
            }
        </div>
)}
export default ModuleInside;