import React from 'react';

import '../../../assets/styles/components/ShoppingCar.scss';

import UI from '../../../assets/static/images/img/ui-design.png';

const Price = (props) => (
    <div className={"flex" + " " + props.margin}> 
        <img className="hero__view__promo__img" src={UI} alt="Imagen del curso"/>
        <div>
            <h3 className="hero__view__promo__title hero__view__promo__title--shopping__car">Aprende a ser mejor lider.</h3>
            <p className="hero__view__promo__teacher--shopping">Por Juan Pablo Laco</p>
            <div className="flex">
                <h2 className="hero__view__promo__price hero__view__promo__price--shopping__car">AR$ 490</h2>
                <p className="hero__view__promo__price__before hero__view__promo__price__before--shopping__car">AR$ 699</p>
                <p className={"hero__view__promo__price__delete hero__view__promo__price__delete--shopping__car" + " " + props.onlyMobile}>Eliminar</p>
            </div>
                <p className={"hero__view__promo__price__delete hero__view__promo__price__delete--shopping__car" + " " + props.onlyDesktop}>Eliminar</p>
        </div>
    </div>
)
export default Price;