import React,{useState} from 'react';

import '../../../assets/styles/components/Buyed.scss';
import ArrowUp from '../../../assets/static/images/svg/arrow-up-black.svg';
import ArrowDown from '../../../assets/static/images/svg/arrow-down-black.svg';
import Reloj from '../../../assets/static/images/svg/reloj.svg';

const Module = ({id,title, duration, text}) => {
    
    const [isToggled, setToggled] = useState(false);

    const toggleTrueFalse = () => setToggled(!isToggled);
    return(
    <div>
        <div className="course__module__element" onClick={toggleTrueFalse}>
            <img className="course__module__arrow" src={isToggled ? ArrowUp: ArrowDown} alt="Flecha hacia abajo"/>
            <strong>Módulo {id} - {title} </strong>
            <div className="flex course__module__time">
                <img className="course__module__reloj" src={Reloj} alt="reloj"/><p>{duration}</p>
            </div>
        </div>
        <div className={isToggled ? "course__module__element__inside":"display-none"} onClick={toggleTrueFalse}>
        <p>{text}</p>
        </div>
    </div>
)}
export default Module;