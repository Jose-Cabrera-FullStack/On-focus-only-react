import React from 'react';
import {connect} from 'react-redux';

import '../../../assets/styles/components/Course.scss';

const YouSave = ({category}) => {
    console.log('category',category)
    return(
        <div className="flex">
            <h1 className="discovery__box__info__inside__price">AR$ {category.price}</h1>
            <h4 className="discovery__box__info__inside__save">Ahorrás AR$ 209</h4>
        </div>
)}

const mapStateToProps = state => {
    return {
      category: state.category || {},
    };
  };

export default connect( mapStateToProps, null )(YouSave);

