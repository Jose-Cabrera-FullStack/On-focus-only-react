import React from 'react';

import '../../assets/styles/components/Data.scss';
import Button from '../../components/Utils/ButtonArrowRight'
import Check from '../../assets/static/images/svg/icon-check.svg'
import Message from  '../../assets/static/images/svg/send-message.svg';



const Data = () => {
  return (
    <section class="data">
        <h4>Gestioná tus datos.</h4>
        <h5>Cambiar contraseña.</h5>
        <form action="">
            <input className="data__input__text" type="text" placeholder="Contraseña actual"/><img className="data__input__check" src={Check} alt=""/> <br/>
            <input className="data__input__text" type="text" placeholder="Nueva Contraseña"/><img className="data__input__check" src={Check} alt=""/><br/>
            <input className="data__input__text" type="text" placeholder="Confirmar Nueva Contraseña"/><img className="data__input__check" src={Check} alt=""/><br/>
            <Button text={'Guardar'} margin={"discovery__box__position btn__secundary--data"}/>
            <div className="contact__check__message flex">
                    <img src={Message} alt=""/>
                    <p>Tu contraseña nueva ha sido guardada con éxito. </p>
                </div>
        </form>
    </section>
)}
export default Data;