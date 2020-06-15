import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/ShoppingCar.scss';

import UI from '../../assets/static/images/img/ui-design.png';
import Arrow from '../../assets/static/images/svg/arrow-right.svg'


import ArrowLeft from '../../assets/static/images/svg/arrow-visualization-black.svg'


const ShoppingCar = () => (
    <section class="shopping__car">
        <div className="flex">
            <img src={ArrowLeft} alt="Fecha a la izquierda"/>
            <h5>Volver a los cursos</h5>
        </div>
        <h1>Tu carrito de compras está listo.</h1>
        <div className="flex">
            <div>
                    <div class="flex"> 
                        <img class="hero__view__promo__img" src={UI} alt="Imagen del curso"/>
                        <div>
                            <h3 class="hero__view__promo__title hero__view__promo__title--shopping__car">Aprende a ser mejor lider.</h3>
                            <p class="hero__view__promo__teacher--shopping">Por Juan Pablo Laco</p>
                            <div class="flex">
                                <h2 class="hero__view__promo__price hero__view__promo__price--shopping__car">AR$ 490</h2>
                                <p class="hero__view__promo__price__before hero__view__promo__price__before--shopping__car">AR$ 699</p>
                                <p class="hero__view__promo__price__delete hero__view__promo__price__delete--shopping__car">Eliminar</p>
                            </div>
                        </div>
                    </div>
                    <hr className="shopping__car__line"/>
                    <div class="flex hero__view__promo__margin"> 
                        <img class="hero__view__promo__img" src={UI} alt="Imagen del curso"/>
                        <div>
                            <h3 class="hero__view__promo__title hero__view__promo__title--shopping__car">Aprende a ser mejor lider.</h3>
                            <p class="hero__view__promo__teacher--shopping">Por Juan Pablo Laco</p>
                            <div class="flex">
                                <h2 class="hero__view__promo__price hero__view__promo__price--shopping__car">AR$ 490</h2>
                                <p class="hero__view__promo__price__before hero__view__promo__price__before--shopping__car">AR$ 699</p>
                                <p class="hero__view__promo__price__delete hero__view__promo__price__delete--shopping__car">Eliminar</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="shopping__car__box">
                <div className="shopping__car__box__inside">
                    <div className="flex">
                        <p className="shopping__car__box__inside__text">Total en el carrito</p>
                        <strong>AR$ 1500</strong>
                    </div>
                    <div className="flex">
                        <p className="shopping__car__box__inside__text shopping__car__box__inside__text--red"><i className="shopping__car__box__inside__discounts">Dcto. 30%</i><br/> Estás ahorrando </p>
                        <i className="shopping__car__box__inside__promo shopping__car__box__inside__promo--red">AR$ 478</i>
                    </div>
                    <hr className="shopping__car__box__inside__line"/>
                    <div className="flex">
                        <h4 className="shopping__car__box__inside__total">Tu total es de</h4>
                        <h4 className="shopping__car__box__inside__total shopping__car__box__inside__total--price">AR$ 980</h4>
                    </div>
                    <button class="btn__secundary btn__secundary--buy discovery__box__position shopping__car--position"
                      >
                      <div class="flex btn__arrow__buy">
                        <img src={Arrow} alt="" />
                        <p>Comprarlo ahora</p>
                      </div>
                    </button>
                    </div>
            </div>

        </div>
    </section>
)
export default ShoppingCar;