import React from 'react';

import '../../../assets/styles/components/ShoppingCar.scss';
import UI from '../../../assets/static/images/img/ui-design.png';
import Triangle from '../../../assets/static/images/svg/triangle-emergent.svg';


const Course = ({margin, src, title, price, priceBefore}) => (
    <div className={"flex" + " " + margin}>
        <img className="hero__view__promo__traingle" src={Triangle} alt=""/> 
        <img className="hero__view__promo__img" src={UI} alt="Imagen del curso"/>
        <div>
            <h3 className="hero__view__promo__title">{title ? title: "Aprende a ser mejor lider."}</h3>
            <div className="flex">
                <h2 className="hero__view__promo__price">AR$ {price ? price : "482"}</h2>
                <p className="hero__view__promo__price__before">AR$ {priceBefore ? priceBefore : "860"}</p>
                <p className="hero__view__promo__price__delete">Eliminar</p>
            </div>
        </div>
</div>
)
export default Course;