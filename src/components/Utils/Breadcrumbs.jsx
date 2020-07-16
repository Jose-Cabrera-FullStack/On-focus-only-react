import React from 'react';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom'

import '../../assets/styles/components/Utils.scss';


import ArrowLeft from '../../assets/static/images/svg/arrow-visualization-black.svg'


const Beadcrumbs = ({ onlyMobile, margin , onlyDesktop, icon}) => {
    return(
        <div className={"beadcrumbs flex" + " " + onlyMobile + " " + margin + " "+ onlyDesktop}>
            <img src={icon ? icon :ArrowLeft} alt="Fecha a la izquierda"/>
            <h5>Volver a los cursos</h5>
        </div>
)}
export default Beadcrumbs;