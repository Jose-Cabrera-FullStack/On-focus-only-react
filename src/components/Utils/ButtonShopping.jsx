import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/Utils.scss';
import '../../assets/styles/components/Course.scss';

import ButtonArrowRight from '../Utils/ButtonArrowRight'
import Shopping from '../Utils/ShoppingCarSquare';


const ButtonShopping = () => (
    <div className="discovery__box__info__inside__buttons flex">
        <ButtonArrowRight/>
        <Shopping />
    </div> 
)
export default ButtonShopping;