import React from 'react';

import '../../assets/styles/components/Course.scss';

import Discount from '../Course/SaveMoney/Discount';
import YouSave from '../Course/SaveMoney/YouSave';

import ButtonShopping from '../Utils/ButtonShopping'



const CourseSaveMoney = () => (

        <div className="discovery__box__info discovery__box__info--course display__course__screen__desktop">
            <div className="discovery__box__info__inside">
                <h2 className="discovery__box__info__inside__title">Lorem ipsum dolor sit amet sed diam nonummy.</h2>
                <p className="discovery__box__info__inside__text">Lorem ipsum dolor sit amet, consectse diam nonummy nibh euismod tincidunt.</p>
                <YouSave/>
                <Discount/>
                <ButtonShopping/>
            </div>
        </div>
)
export default CourseSaveMoney;

