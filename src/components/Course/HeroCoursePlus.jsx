import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/CoursePlus.scss';

import UI from '../../assets/static/images/img/ui-design.png';


const HeroCoursePlus = () => (
    <section class="hero__view--courses__plus">
        <div class="flex">

            <div class="hero__view--courses__plus__left" >
                <h1 class="hero__title__view hero__title__view--couse__plus">
                    En la misión de empoderar 100 millones de personas a través del
                    conocimiento.
                </h1>
                <h4 class="hero__view--courses__plus__text">
                    Lorem ipsum dolor sit amet, consectse diam nonummy nibh euismod tincidunt.
                </h4>
                
            </div>
            <div class="hero__view__promo">
                <div class="flex"> 
                    <img class="hero__view__promo__img" src={UI} alt="Imagen del curso"/>
                    <div>
                        <h3 class="hero__view__promo__title">Aprende a ser mejor lider.</h3>
                        <div class="flex">
                            <h2 class="hero__view__promo__price">AR$ 490</h2>
                            <p class="hero__view__promo__price__before">AR$ 699</p>
                            <p class="hero__view__promo__price__delete">Eliminar</p>
                        </div>
                    </div>
                </div>
                <div class="flex hero__view__promo__margin"> 
                    <img class="hero__view__promo__img" src={UI} alt="Imagen del curso"/>
                    <div>
                        <h3 class="hero__view__promo__title">Aprende a ser mejor lider.</h3>
                        <div class="flex">
                            <h2 class="hero__view__promo__price">AR$ 490</h2>
                            <p class="hero__view__promo__price__before">AR$ 699</p>
                            <p class="hero__view__promo__price__delete">Eliminar</p>
                        </div>
                    </div>
                </div>
                <div class="hero__view__promo__total">
                    <div class="flex">
                        <h2>Tu total es de:</h2>
                        <h2 class="hero__view__promo__total__ar">AR$ 980</h2>
                    </div>
                </div>
                <div>
                    <button class="btn__secundary btn__secundary--promo">Comprar</button>
                    <button class="btn__primary btn__primary--promo">Ir al carrito</button>
                </div>
            </div>
        </div>    
    </section>
)
export default HeroCoursePlus;