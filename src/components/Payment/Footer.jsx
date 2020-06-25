import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/Payment.scss';
const Details = (props) => (
    <section className={"payment__footer"+" " + props.onlyDesktop}>
        <div className="flex">
            <h5>
            @OnFocus2019 - All Rights Reserved
            </h5>
            <ul className="flex">
                <li>Políticas de Cookie</li>
                <li>Centro de Ayuda</li>
                <li>Términos y condiciones</li>
            </ul>
        </div>
    </section>
)
export default Details;