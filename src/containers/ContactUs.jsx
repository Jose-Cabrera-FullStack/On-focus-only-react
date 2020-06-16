import React from 'react';
import {connect} from 'react-redux';

import Hero from '../components/Utils/Hero';
import Contact from '../components/Profile/Contact';


import '../assets/styles/App.scss';

const ContactUs = () => {
  return(
    <div className="App">
        <Hero title={'Contacto'}/> 
        <Contact/> 

    </div>

  );
}

export default connect(null,null)(ContactUs);