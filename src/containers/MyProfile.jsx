import React from 'react';
import {connect} from 'react-redux';

import Hero from '../components/Utils/Hero';
import Data from '../components/Profile/Data';



import '../assets/styles/App.scss';
import '../assets/styles/components/Data.scss';

const MyProfile = () => {
    const title = 'Mi Perfil'
  return(
    <div className="App"> 
            <Hero title={title}/> 
            <Data/>

    </div>

  );
}

export default connect(null,null)(MyProfile);