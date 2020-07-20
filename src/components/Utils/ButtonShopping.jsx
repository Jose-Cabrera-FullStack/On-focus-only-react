import React from 'react';
import { connect } from "react-redux";;

import '../../assets/styles/components/Utils.scss';
import '../../assets/styles/components/Course.scss';

import ButtonArrowRight from '../Utils/ButtonArrowRight'
import Shopping from '../Utils/ShoppingCarSquare';


const ButtonShopping = (props) => {
    return(
    <div className="discovery__box__info__inside__buttons flex">
        <ButtonArrowRight/>
        <Shopping course={props.category} />
    </div> 
)}

const mapStateToProps = (state) => {
    return {
      category: state.category || {},
    };
  };

export default connect( mapStateToProps, null)(ButtonShopping);