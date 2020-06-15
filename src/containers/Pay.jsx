import React from 'react';
import {connect} from 'react-redux';

import Pay from '../components/Payment/Pay';
import Details from '../components/Payment/Details';
import WhatIsBuying from '../components/Payment/WhatIsBuying';
import SecurePay from '../components/Payment/SecurePay';

import '../assets/styles/App.scss';
import '../assets/styles/components/Payment.scss';

const Payment = () => {

  return(
    <div className="App">
        <div className="payment">
            <div className="grid-1">
                <Pay/>
            </div>
            <div className="payment__right grid-2">
                <Details/>
                <WhatIsBuying/>
            </div>

        </div>
        <div>
                <SecurePay/>
        </div>
    </div>

  );
}

export default connect(null,null)(Payment);