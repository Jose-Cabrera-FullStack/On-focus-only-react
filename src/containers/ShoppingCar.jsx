import React from 'react';
import {connect} from 'react-redux';

import ShoppingCar from '../components/Payment/ShoppingCar';
import Discovery from '../components/Principal/Discovery';

import '../assets/styles/App.scss';

const Course = () => {
  const display = 'display-none'
  const column = 'grid-column-3'
  const none = 'shopping-none'
  const info = 'Cursos recomendados.'

  return(
    <div className="App">

        <ShoppingCar/>
        <Discovery display={display} column={column} none={none} info={info}/>
    
    </div>

  );
}

export default connect(null,null)(Course);