import React from 'react';

import '../../../assets/styles/components/ShoppingCar.scss';
import Comillas from '../../../assets/static/images/svg/comillas.svg'
import Perfil from '../../../assets/static/images/img/perfil.png'


const Teacher = (props) => {
    console.log(props.ValueX)
    return(
    <div className={"about__us__title__slide about__us__box"+ " " + props.display} style={{transform:`translateX(${props.ValueX})`}}>
        <div className="about__us__box__inside">
        <img src={Perfil} alt="perfil" />
        <h2 className="about__us__box__inside__name">{props.name ? props.name:'Fernando Lorem Ipsum'}</h2>
        <i className="about__us__box__inside__profesion">Emprendedor</i>
        <br />
        <br />
        <img src={Comillas} alt="comillas" />
        <p className="about__us__box__inside__text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat. Ut wisi enim ad minim veniam.
        </p>
        </div>
  </div>
)}
export default Teacher;