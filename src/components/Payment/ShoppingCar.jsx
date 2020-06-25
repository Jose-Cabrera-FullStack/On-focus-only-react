import React from 'react';
import {Link} from 'react-router-dom';

import Breadcrumbs from '../Utils/Breadcrumbs'

import ShoppingBox from '../Payment/Box/ShoppingBox'
import Course from './Course/Course'

import '../../assets/styles/components/ShoppingCar.scss';

import UI from '../../assets/static/images/img/ui-design.png';

const ShoppingCar = (props) => (
    <section class="shopping__car">
        <Breadcrumbs/>
        <h1>Tu carrito de compras está listo.</h1>
        <div className={"flex" + " " + props.onlyMobile}>
            <div>
                <Course onlyMobile={'display__screen__desktop'} onlyDesktop={'display__screen__mobile'}/>
                <hr className="shopping__car__line"/>
                <Course margin={"hero__view__promo__margin"} onlyMobile={'display__screen__desktop'} onlyDesktop={'display__screen__mobile'}/>
            </div>
            <ShoppingBox onlyDesktop={'display__screen__desktop'} onlyMobile={'display__screen__mobile'}/>

        </div>
    </section>
)
export default ShoppingCar;