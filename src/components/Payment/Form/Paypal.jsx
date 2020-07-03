import React from 'react';
import {Link} from 'react-router-dom';

import '../../../assets/styles/components/Payment.scss';

import ButtonArrowRight from '../../Utils/ButtonArrowRight';

const Paypal = (props) => (
    <div className="way-to-pay__input__box way-to-pay__box__card--mercado__pago">
        <p className="way-to-pay__box__card--mercado__pago__text">Para poder continuar debes iniciar sesión con tu cuenta de Paypal.</p>
        <Link to="/adquirido">
            <ButtonArrowRight margin={'way-to-pay__box__card--mercado__pago__text__btn'} />
        </Link>
    </div>
)
export default Paypal;