import React from 'react';

import '../../../assets/styles/components/ShoppingCar.scss';

import Card from '../../../assets/static/images/svg/credit-card.svg'
import CardColor from '../../../assets/static/images/svg/credit-card-color.svg'

const CreditCard = ({method,isSwitch}) => (
    <div className="way-to-pay__box__card" onClick={method}>
        <img className="way-to-pay__box__card__img" src={isSwitch === ''? CardColor : Card } alt="Tarjeta de credito"/>
    </div>
)
export default CreditCard;