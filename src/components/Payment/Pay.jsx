import React,{useState} from 'react';

import '../../assets/styles/components/ShoppingCar.scss';

import CreditCard from './PayMethod/CreditCard';
import MercadoPago from './PayMethod/MercadoPago'
import Paypal from './PayMethod/Paypal'

import CreditCarForm from './Form/CreditCar'
import MercadoPagoForm from './Form/MercadoPago'
import PaypalForm from './Form/Paypal'


const Pay = (props) => {
    
    
    const [isSwitch, setSwitch] = useState("");
    
    const PayMethodSwitchCreditCar = () => setSwitch("");
    
    const PayMethodSwitchMercadoPago = () => setSwitch("MercadoPago");
    
    const PayMethodSwitchPaypal = () => setSwitch("Paypal");
    
    const PayMethod = (isSwitch) =>{
        switch(isSwitch) {
    
            case "MercadoPago":  return <MercadoPagoForm/>;
            case "Paypal":       return <PaypalForm/>;
            default:             return <CreditCarForm/>
            
            }
        }

    return(
    <form action="submit" className="way-to-pay">
        <div className={props.onlyDesktop}>
        <p className="way-to-pay__text">Ingresá tu correo electrónico.</p>
        <input type="text" placeholder="E-mail" className="way-to-pay__input way-to-pay__input--email"/>
        </div>
        <div className="way-to-pay__box">
            <div className="flex">
                <CreditCard isSwitch={isSwitch} method={PayMethodSwitchCreditCar}/>
                <MercadoPago isSwitch={isSwitch} method={PayMethodSwitchMercadoPago}/>
                <Paypal isSwitch={isSwitch} method={PayMethodSwitchPaypal}/>
            </div>

            {PayMethod(isSwitch)}
        </div>
    </form>
)}
export default Pay;