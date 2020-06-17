import React from 'react';
import {connect} from 'react-redux';

import Politicy from '../components/Profile/Politicy'
import '../assets/styles/App.scss';
import '../assets/styles/components/Payment.scss';

const Payment = () => {

  return(
    <div className="App">
        <Politicy/>
    </div>

  );
}

export default connect(null,null)(Payment);