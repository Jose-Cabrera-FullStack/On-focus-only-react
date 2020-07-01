import React from 'react';

import '../../assets/styles/components/ShoppingCar.scss';

import Course from './EmergentMenuBox/Course'

import ButtonArrowRight from './ButtonArrowRight'


const EmergentMenu = ({toggle, total}) => {
    return(
        <div class={toggle ? "hero__view__promo":"display-none"}>
            <Course
                src={""}
                title={"Marketing en redes sociales"}
                price={"890"}
                priceBefore={"1200"}
            />

            <Course margin={'hero__view__promo__margin'}/>

            <div class="hero__view__promo__total">
                <div class="flex">
                    <h2>Tu total es de:</h2>
                    <h2 class="hero__view__promo__total__ar">AR$ {total ? total : "987"}</h2>
                </div>
            </div>
            <div>
                <ButtonArrowRight text="Comprar" width={"btn__secundary--emergent"}/>
                <ButtonArrowRight text="Ir al carrito" icon={"btn__arrow__buy__shopping"} width={"btn__secundary--emergent"}/>
                <button class="btn__primary btn__primary--promo">Ir al carrito</button>
            </div>
        </div>
)}
export default EmergentMenu;