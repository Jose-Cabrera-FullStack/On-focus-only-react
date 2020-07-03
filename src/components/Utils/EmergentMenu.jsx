import React from 'react';

import '../../assets/styles/components/ShoppingCar.scss';
import Triangle from '../../assets/static/images/svg/triangle-emergent.svg';

import Course from './EmergentMenuBox/Course'

import ButtonArrowRight from './ButtonArrowRight'


const EmergentMenu = ({toggle, total}) => {
    return(
        <div className={toggle ? "hero__view__promo":"display-none"}>
            <Course
                src={""}
                title={"Marketing en redes sociales."}
                price={"890"}
                priceBefore={"1200"}
            />

            <Course margin={'hero__view__promo__margin'}/>

            <div className="hero__view__promo__total">
                <div className="flex">
                    <h2>Tu total es de:</h2>
                    <h2 className="hero__view__promo__total__ar">AR$ {total ? total : "987"}</h2>
                </div>
            </div>
            <div className="hero__view__promo__margin__btn">
                <ButtonArrowRight text="Comprar" icon={"btn__arrow__black"}  width={"btn__secundary--emergent"}/>            
                <ButtonArrowRight text="Ir al carrito"  icon={"btn__arrow__buy__shopping"} width={"btn__secundary--emergent__shopping"}/>            
            </div>
        </div>
)}
export default EmergentMenu;