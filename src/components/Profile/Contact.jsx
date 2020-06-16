import React from 'react';

import '../../assets/styles/components/Data.scss';
import Arrow from '../../assets/static/images/svg/arrow-right.svg'
import Facebook from '../../assets/static/images/svg/facebook-border.svg'
import Instagram from '../../assets/static/images/svg/instagram-border.svg'
import LinkedIn from '../../assets/static/images/svg/linkedin-border.svg'
import Youtube from '../../assets/static/images/svg/youtube-border.svg'


const Data = () => {
  return (
    <section class="data">
        <p className="data__text">Si tienes alguna consulta o simplemente quieres realizar un contacto con nosotros, la mejor manera de hacerlo es via mail a hola@onfocus.com</p>
        <p className="data__text">Respondemos todos los correos en un lapso menor a 24 horas, si es fin de semana, ten en cuenta que la respuesta pueda demorar un poco más.</p>
        <p className="data__text">De todas maneras, se cual sea la consulta, vamos a encontrarle una solución a tu caso.</p>
        <h1>Lorem ipsum dolor sit amet.</h1>

        <div className="flex">
            <div>
                <form action="">

                <input className="data__input__text" type="text" placeholder="Nombre Completo"/> <br/>
                <input className="data__input__text" type="text" placeholder="E-mail"/> <br/>
                <input className="data__input__text" type="text" placeholder="Teléfono"/> <br/>
                <input className="data__input__text data__input__text__area" type="text" placeholder="¿Cuál es el motivo por el cuál nos contactás?"/> <br/>
                <button
                class="btn__secundary btn__secundary--buy discovery__box__position btn__secundary--data"
                >
                <div class="flex btn__arrow__buy">
                <img src={Arrow} alt="" />
                <p>Enviar</p>
                </div>
            </button>
                </form>
            </div>
            <div className="data__right">
                <strong className="data__right__title">Oficina de contacto</strong>
                <p>El Salvador 5218,C1414BPV Buenos Aires, Argentina.</p>
                <div className="flex">
                    <img src={Facebook} alt="Red Social"/>
                    <img src={Youtube} alt="Red Social"/>
                    <img src={Instagram} alt="Red Social"/>
                    <img src={LinkedIn} alt="Red Social"/>
                </div>
            </div>
        </div>
    
    </section>
)}
export default Data;