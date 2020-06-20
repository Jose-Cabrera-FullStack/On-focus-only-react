import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/CoursePlus.scss';

import Perfil from '../../assets/static/images/svg/perfil.svg';
import Reloj from '../../assets/static/images/svg/reloj.svg';
import Media from '../../assets/static/images/svg/media.svg';


const CourseInfoOnlyInfo = () => (
 <div class="course__information">

        <div class="flex">

            <div class="flex">
                <img src={Perfil} alt="perfil"/>
                <p className="course__information__students">150 alumnos.</p>
            </div>
            <div class="flex">
                <img src={Reloj} alt="perfil"/>
                <p>Duración del curso: 1 hora, 30 minutos. </p>
            </div>
            <div class="flex">
                <img src={Media} alt="perfil"/>
                <p>Cantidad de módulos: 6.</p>
            </div>
            
        </div>
        <div class="flex">
            <div class="flex">
                <img src={Reloj} alt="perfil"/>
                <p>Empezás y terminás cuando querés.</p>
            </div>
            <div class="flex">
                <img src={Media} alt="perfil"/>
                <p>Hacelo las veces que quieras.</p>
            </div>
        </div>
    </div>
)
export default CourseInfoOnlyInfo;