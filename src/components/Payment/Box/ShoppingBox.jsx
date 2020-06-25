import React from 'react';

import '../../../assets/styles/components/ShoppingCar.scss';
import ButtonArrowRight from '../../Utils/ButtonArrowRight'


const ShoppingBox = (props) => (
            <div className="shopping__car__box">
                <div className="shopping__car__box__inside">
                    <div className={"flex" + " " + props.onlyDesktop}>
                        <p className="shopping__car__box__inside__text">Total en el carrito</p>
                        <strong>AR$ 1500</strong>
                    </div>
                    <div className={"flex" + " " + props.onlyDesktop}>
                        <p className="shopping__car__box__inside__text shopping__car__box__inside__text--red"><i className="shopping__car__box__inside__discounts">Dcto. 30%</i><br/> Estás ahorrando </p>
                        <i className="shopping__car__box__inside__promo shopping__car__box__inside__promo--red">AR$ 478</i>
                    </div>
                    <hr className={"shopping__car__box__inside__line" + " " + props.onlyDesktop}/>
                    <div className="flex">
                        <h4 className="shopping__car__box__inside__total">Tu total es de</h4>
                        <h4 className="shopping__car__box__inside__total shopping__car__box__inside__total--price">AR$ 980</h4>
                    </div>
                    <div className={"flex" + " " + props.onlyMobile}>
                        <div className="flex shopping__car__box__inside__mobile">
                        <p className="shopping__car__box__inside__text shopping__car__box__inside__text--red"><i className="shopping__car__box__inside__discounts">Dcto. 30%</i><br/> Estás ahorrando </p>
                        <i className="shopping__car__box__inside__promo shopping__car__box__inside__promo--red">AR$ 478</i>
                        </div>
                    </div>
                    <div className="shopping__car__box__inside__button">     
                        <ButtonArrowRight/>
                    </div>
                    </div>
            </div>
)
export default ShoppingBox;