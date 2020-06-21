import React from 'react';
import {connect} from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Utils/Hero';
import Contact from '../components/Profile/Contact';


import '../assets/styles/App.scss';

const ContactUs = () => {
  return(
    <div className="App">
        <Header/> 

        <Hero title={'Contacto'}/> 
        <Contact/> 
        <Footer/> 

    </div>

  );
}

export default connect(null,null)(ContactUs);