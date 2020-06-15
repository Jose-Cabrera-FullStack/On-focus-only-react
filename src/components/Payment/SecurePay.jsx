import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/ShoppingCar.scss';

import Secure from '../../assets/static/images/img/secure-payment.png'


const SecurePay = () => (
    <section className="secure__pay">
        <div className="flex">
            <img className="secure__pay__img" src={Secure} alt="Pago Seguro"/>
            <div className="secure__pay__inside">
                <h2>Pago 100% seguro</h2>
                <p>Ut wisi enim ad minim veniam. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
            </div>
        </div>

    </section>
)
export default SecurePay;