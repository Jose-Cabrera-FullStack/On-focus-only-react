import React from 'react';

import '../../assets/styles/components/Data.scss';
import Button from  '../../components/Utils/ButtonArrowRight';
import Message from  '../../assets/static/images/svg/send-message.svg';



const Data = (props) => {
  return (
    <section class="data">
        <p className="data__text">Si tienes alguna consulta o simplemente quieres realizar un contacto con nosotros, la mejor manera de hacerlo es via mail a hola@onfocus.com</p>
        <p className="data__text">Respondemos todos los correos en un lapso menor a 24 horas, si es fin de semana, ten en cuenta que la respuesta pueda demorar un poco más.</p>
        <p className="data__text">De todas maneras, se cual sea la consulta, vamos a encontrarle una solución a tu caso.</p>
        <h1>Lorem ipsum dolor sit amet.</h1>

        <div className={"flex" + " " + props.onlyMobile}>
            <div>
                <form action="">
                <input className="data__input__text" type="text" placeholder="Nombre Completo"/> <br/>
                <input className="data__input__text" type="text" placeholder="E-mail"/> <br/>
                <input className="data__input__text" type="text" placeholder="Teléfono"/> <br/>
                <textarea className="data__input__text data__input__text__area"  name="" id="" cols="30" rows="10" placeholder="¿Cuál es el motivo por el cuál nos contactás?"></textarea> <br/>
                <Button margin={'btn__secundary--data'} text={'Enviar'}/>
                </form>
                <div className="contact__check__message flex">
                    <img src={Message} alt=""/>
                    <p>Su mensaje ha sido enviado. Gracias! </p>
                </div>
            </div>
            <div className="data__right">
                <strong className="data__right__title">Oficina de contacto.</strong>
                <p>El Salvador 5218,C1414BPV Buenos Aires, Argentina.</p>
                <div className="flex">
                <ol class="footer__container__left--fix footer__container__left--fix__contact__us">
                <li>
                <span className="contact__socials--youtube" alt="Youtube"></span>
                </li>
                <li>
                <span className="contact__socials--facebook" alt="Facebook"></span>
                </li>
                <li>
                <span className="contact__socials--instagram" alt="Instagram"></span>
                </li>
                <li>
                <span className="contact__socials--linkedin" alt="Instagram"></span>
                </li>
                </ol>
                </div>
            </div>
        </div>
    
    </section>
)}
export default Data;