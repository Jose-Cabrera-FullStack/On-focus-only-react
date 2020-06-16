import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/Course.scss';
import Progress from '../../assets/static/images/svg/progress-bar.svg';
import Media from '../../assets/static/images/svg/media.svg';
import UI from '../../assets/static/images/img/buyed-image.png';


const CourseProgress = () => (
    <section class="buyed__progress">
        <div className="flex">
            <div>
                <h1>Aprendé a ser mejor lider.</h1>
                <h4>Por Juan Pablo Laco</h4>
                <img src={Progress} alt="Progreso del curso"/>
                <br/>
                <button class="btn__secundary btn__secundary--buy btn__secundary--buyed__progress">
                <div class="flex btn__arrow__buy">
                    <img className="buyed__progress__media" src={Media} alt="Ícono de Comenzar" />
                    <p>Ver Ahora</p>
                </div>
                </button>
            </div>
            <div>
                <img className="buyed__progress__img" src={UI} alt="Foto del Curso Comprado"/>
            </div>
        </div>
    </section>
)
export default CourseProgress;