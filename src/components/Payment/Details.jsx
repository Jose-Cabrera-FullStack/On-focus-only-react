import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/Payment.scss';
import arrowRight from '../../assets/static/images/svg/arrow-shopping-right.svg'
import arrowDown from '../../assets/static/images/svg/arrow-shopping-down.svg'

const Details = () => (
    <section className="details">
        <div className="details__inside">
            <div className="flex">
                <h3 className="details__inside__title">Tu Carrito.</h3>
                <div className="details__inside__title__edit flex">
                    <p>Editar</p>
                    <img src={arrowRight} alt="Flecha para la derecha"/>
                </div>
            </div>
            <div>
                <div className="flex">
                    <div className="details__inside__total">
                        <p>Tu total es de</p>
                        <strong>AR$ 980</strong>
                    </div>
                    <i className="details__inside__total__before">ARS 1398</i>
                </div>
                
            </div>
            <div className="details__inside__detail flex">
                <p>Ver detalles</p>
                <img src={arrowDown} alt="Fecla para abajo"/>
            </div>
        </div>
    </section>
)
export default Details;