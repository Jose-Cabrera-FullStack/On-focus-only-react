import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/ShoppingCar.scss';

import UI from '../../assets/static/images/img/ui-design.png';

import CreditCard from '../../assets/static/images/svg/credit-card-credit.svg'


const VisualizationCourse = () => (
    <form action="submit" className="way-to-pay">
        <p>Ingresá tu correo electrónico.</p>
        <input type="text" placeholder="E-mail"/>
        <div className="way-to-pay__box">
            <div className="flex">
                <div className="way-to-pay__box__card">
                    <img src={CreditCard} alt="Tarjeta de credito"/>
                </div>
                <div className="way-to-pay__box__card">
                    <img src={CreditCard} alt="Tarjeta de credito"/>
                </div>
                <div className="way-to-pay__box__card">
                    <img src={CreditCard} alt="Tarjeta de credito"/>
                </div>
            </div>
            <p>Ingresá los datos de tu tarjeta</p>
            <input type="text" placeholder="Número de la tarjeta"/>
            <div className="flex">
                <input type="text" placeholder="MM/AA"/>
                <input type="text" placeholder="Código de seguridad"/>
            </div>
            <p>todos los campos son obligatorios</p>
            <div className="flex">
                <input type="checkbox" name="" id=""/> Guardar mi tarjeta
                <div className="flex">
                    <img src="" alt="Visa"/>
                    <img src="" alt="Mastercard"/>
                    <img src="" alt="American Express"/>
                </div>
            </div>
        </div>
        <button onSubmit>Comprarlo Ahora</button>
    </form>
)
export default VisualizationCourse;