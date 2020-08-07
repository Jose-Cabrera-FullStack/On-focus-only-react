import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/Payment.scss';
const Details = (props) => (
    <section className={"payment__footer"+" " + props.onlyDesktop}>
        <div className="flex">
            <h5>
            @OnFocus2020 - All Rights Reserved
            </h5>
            <ul className="flex">
                <Link to="/politicas" className="text-decoration"><li>Políticas de Cookie</li></Link>
                <Link to="/politicas" className="text-decoration"><li>Centro de Ayuda</li></Link>
                <Link to="/politicas" className="text-decoration"><li>Términos y condiciones</li></Link>
            </ul>
        </div>
    </section>
)
export default Details;