import React from 'react';

import '../../../assets/styles/components/ShoppingCar.scss';

import Paypal from '../../../assets/static/images/svg/paypal-grey.svg'
import PaypalColor from '../../../assets/static/images/svg/paypal.svg'

const MercadoPago = ({method,isSwitch}) => (
    <div className="way-to-pay__box__card" onClick={method}>
        <img className="way-to-pay__box__card__img" src={isSwitch === 'Paypal'? PaypalColor : Paypal} alt="Tarjeta de credito"/>
    </div>
)
export default MercadoPago;