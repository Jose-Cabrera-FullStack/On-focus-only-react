import React,{useState} from 'react';

import '../../../assets/styles/components/Buyed.scss';

import ModuleInside from './ModuleInside';


import ArrowUp from '../../../assets/static/images/svg/arrow-up-black.svg';
import ArrowDown from '../../../assets/static/images/svg/arrow-down-black.svg';
import Reloj from '../../../assets/static/images/svg/reloj.svg';

import Play from '../../../assets/static/images/svg/icon-play-black.svg';

const Module = ({id,title, duration, buyed}) => {
    
    const [isToggled, setToggled] = useState(false);

    const toggleTrueFalse = () => setToggled(!isToggled);
    return(
    <div>
        <div className="course__module__element" onClick={toggleTrueFalse}>
        <img className={buyed ?"course__module__play":"display-none"} src={Play} alt="Ícono de Play"/>
            <img className={buyed ? "course__module__arrow course__module__arrow--buyed":"course__module__arrow"} src={isToggled ? ArrowUp: ArrowDown} alt="Flecha hacia abajo"/>
            <strong className="course__module__element__title">Módulo {id} - {title ? title : duration} </strong>
            {buyed ? <p className="course__module__sub__title">Lorem ipsum dolor sit amet.</p>:
            <div className="flex course__module__time">
                <img className="course__module__reloj" src={Reloj} alt="reloj"/><p>{duration}</p>
            </div>
            }
        </div> 
        <ModuleInside text={'hola'} isToggled={isToggled} buyed={buyed}/>
    </div>
)}
export default Module;