import React from 'react';

import '../../../assets/styles/components/ShoppingCar.scss';

import Mercadopago from '../../../assets/static/images/svg/mercadopago-logo.svg'
import MercadopagoColor from '../../../assets/static/images/svg/mercadopago-logo-grey.svg'

const Paypal = ({method,isSwitch}) => (
    <div className="way-to-pay__box__card" onClick={method}>
        <img className="way-to-pay__box__card__img" src={isSwitch === 'MercadoPago'? Mercadopago : MercadopagoColor} alt="Tarjeta de credito"/>
    </div>
)
export default Paypal;