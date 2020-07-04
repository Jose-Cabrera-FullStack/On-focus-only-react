import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/Course.scss';
import Button from '../../components/Utils/ButtonArrowRight';

import UI from '../../assets/static/images/img/buyed-image.png';


const CourseProgress = (props) => {
    const width = 40
    
    return(
    <section className="buyed__progress">
        <div className="flex">
            <div>
                <h1>Aprendé a ser mejor lider.</h1>
                <h4>Por Juan Pablo Laco</h4>
                <div className="buyed__progress__bar">
                <div className="buyed__progress__bar__completed" style={{width:`${width}%`}}><p>{width}</p></div>
                </div>
                <br/>
                <br/>
                <Button icon={"icon btn__play__img"} text={"Ver Lorem ipsum"}/>
            </div>
            <div>
                <img className={"buyed__progress__img"+ " " + props.onlyDesktop} src={UI} alt="Foto del Curso Comprado"/>
            </div>
        </div>
    </section>
)}
export default CourseProgress;