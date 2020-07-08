import React from 'react';

import '../../../assets/styles/components/ShoppingCar.scss';
import UI from '../../../assets/static/images/img/ui-design.png';


const Course = ({margin, src, title, price, priceBefore,shoppingCar,teacher}) => {
    
    return(
    <div className={"flex" + " " + margin}>
        <img className={shoppingCar ? "hero__view__promo__img--shopping__car":"hero__view__promo__img"} src={UI} alt="Imagen del curso"/>
        <div>
            <h3 className={shoppingCar ? "hero__view__promo__title--shopping__car" : "hero__view__promo__title"}>{title ? title: "Aprende a ser mejor lider."}</h3>
            <div className={shoppingCar ? "display-none":"flex"}>
                <h2 className="hero__view__promo__price">AR$ {price ? price : "482"}</h2>
                <p className="hero__view__promo__price__before">AR$ {priceBefore ? priceBefore : "860"}</p>
                <p className="hero__view__promo__price__delete">Eliminar</p>
            </div>
            {teacher ? <p className="hero__view__promo__teacher--shopping__car">Por {teacher ? teacher : "Juan Pablo Laco"}</p>: ""}
        </div>
</div>
)}
export default Course;