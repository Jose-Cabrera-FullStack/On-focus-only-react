import React from 'react';

import '../../../assets/styles/components/ShoppingCar.scss';
import Button from  '../../../components/Utils/ButtonArrowRight';


const Form = (props) => {
    return(
        <form action="">
            <input required className="data__input__text" type="text" placeholder="Nombre Completo"/> <br/>
            <input required className="data__input__text" type="text" placeholder="E-mail"/> <br/>
            <input required className="data__input__text" type="text" placeholder="Teléfono"/> <br/>
            <textarea className="data__input__text data__input__text__area"  name="" id="" cols="30" rows="10" placeholder="¿Cuál es el motivo por el cuál nos contactás?"></textarea> <br/>
            <Button margin={'btn__secundary--data'} text={'Enviar'}/>
        </form>
)}
export default Form;