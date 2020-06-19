import React from 'react';

import '../../assets/styles/components/Data.scss';
import Arrow from '../../assets/static/images/svg/arrow-right.svg'


const Data = () => {
  return (
    <section class="data">
        <h4>Gestioná tus datos.</h4>
        <h5>cambiar contraseña.</h5>
        <form action="">
            <input className="data__input__text" type="text" placeholder="Contraseña actual"/> <br/>
            <input className="data__input__text" type="text" placeholder="Nueva Contraseña"/><br/>
            <input className="data__input__text" type="text" placeholder="Confirmar Nueva Contraseña"/><br/>
            <button
                class="btn__secundary btn__secundary--buy discovery__box__position btn__secundary--data"
                >
                <div class="flex btn__arrow__buy">
                <img src={Arrow} alt="" />
                <p>Guardar</p>
                </div>
            </button>
        </form>
    </section>
)}
export default Data;