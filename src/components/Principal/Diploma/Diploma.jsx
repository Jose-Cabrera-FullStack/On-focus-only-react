import React from 'react';
import {Link} from 'react-router-dom';

import '../../../assets/styles/components/ShoppingCar.scss';

import Star from '../../../assets/static/images/svg/star.svg'
import DiplomaImg from '../../../assets/static/images/img/diploma.png'


const Diploma = ({display, none}) => {
    return(
        <div className={"discovery__diploma slide-in-top"+ " " + display + " " + none}>
        <img
          className="discovery__diploma__star"
          src={Star}
          alt="star"
        />
        <h2 className="discovery__diploma__title">Obten tu diploma.</h2>
        <p className="discovery__diploma__text">
          Al terminar un curso obtendrás un certificado digital que
          certifica el curso.
        </p>
        <img
          className="discovery__diploma__img"
          src={DiplomaImg}
          alt="diploma"
        />
      </div>
      
)}
export default Diploma;