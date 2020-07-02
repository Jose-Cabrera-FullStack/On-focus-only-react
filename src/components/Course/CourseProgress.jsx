import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/Course.scss';
import Button from '../../components/Utils/ButtonArrowRight';

import Progress from '../../assets/static/images/svg/progress-bar.svg';
import UI from '../../assets/static/images/img/buyed-image.png';


const CourseProgress = (props) => (
    <section className="buyed__progress">
        <div className="flex">
            <div>
                <h1>Aprendé a ser mejor lider.</h1>
                <h4>Por Juan Pablo Laco</h4>
                <img src={Progress} alt="Progreso del curso"/>
                <br/>
                <br/>
                <Button icon={"icon btn__play__img"} text={"Ver Lorem ipsum"}/>
            </div>
            <div>
                <img className={"buyed__progress__img"+ " " + props.onlyDesktop} src={UI} alt="Foto del Curso Comprado"/>
            </div>
        </div>
    </section>
)
export default CourseProgress;