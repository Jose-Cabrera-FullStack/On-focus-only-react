import React from 'react';
import {Link} from 'react-router-dom';

import ButtonArrowRight from '../Utils/ButtonArrowRight';
import '../../assets/styles/components/Payment.scss';

import Human from '../../assets/static/images/img/human-congratulation.png'

const Pay = ({handleClose}) => (
    <section className="congratulation">
        <div className="congratulation__box">
            <span onClick={handleClose} className="congratulation__exit" alt="Ícono para salir"></span>
            <div className="congratulation__box__inside">
            <img src={Human} alt="Felicidades"/>
            <h1>¡Felicitaciones!</h1>
            <h4>Adquiriste tu curso con éxito.</h4>
            <ButtonArrowRight background={'btn__secundary--way-to-pay'} margin={'btn__secundary--congratulation'}/>
            </div>
        </div>
    </section>
)
export default Pay;