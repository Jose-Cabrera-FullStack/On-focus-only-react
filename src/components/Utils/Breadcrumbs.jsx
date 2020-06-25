import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/Utils.scss';


import ArrowLeft from '../../assets/static/images/svg/arrow-visualization-black.svg'


const Beadcrumbs = (props) => (
        <div className={"beadcrumbs flex" + " " + props.onlyMobile + " " + props.margin}>
            <img src={props.icon ? props.icon :ArrowLeft} alt="Fecha a la izquierda"/>
            <h5>Volver a los cursos</h5>
        </div>
)
export default Beadcrumbs;