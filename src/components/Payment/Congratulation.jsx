import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/Payment.scss';

import Human from '../../assets/static/images/img/human-congratulation.png'

const Pay = () => (
    <section className="congratulation">
        <div className="congratulation__box">
            <div className="congratulation__box__inside">

            <img src={Human} alt="Felicidades"/>
            <h1>¡Felicitaciones!</h1>
            <h4>Adquiriste tu curso con éxito.</h4>
            <button class="btn__secundary btn__secundary--buy "> Comenzar ahora</button>
            </div>
        </div>
    </section>
)
export default Pay;