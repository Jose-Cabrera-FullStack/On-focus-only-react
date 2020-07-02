import React from 'react';

import '../../../assets/styles/components/Course.scss';

import ArrowLeft from '../../../assets/static/images/svg/arrow-left.svg';
import ArrowRight from '../../../assets/static/images/svg/arrow-right.svg';


const Arrows = ({goLeft,goRight,total,ValueX}) => {
    const index = (ValueX) =>{
        return Math.abs(ValueX) / 100
    }
    return(
        <div className="flex course__recomendation__arrows">
            <span className="course__recomendation__arrows__left"
            alt="Flecha a la derecha"
            onClick={goLeft}
            />
            <p className="course__recomendation__arrows__numb">{index(ValueX) + 1}/{total}</p>
            <span className="course__recomendation__arrows__right"
            alt="Flecha a la izquierda"
            onClick={goRight}
            />
        </div>
)}
export default Arrows;