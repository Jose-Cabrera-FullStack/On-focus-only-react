import React from 'react';
import {connect} from 'react-redux';

import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Podcast/Hero'
import Information from '../components/Podcast/Information'
import '../assets/styles/App.scss';

const Podcast = () => {

  return(
    <div className="App">
        <Header/>
        <Hero/>
        <Information/>
        <Footer/>

    </div>

  );
}

export default connect(null,null)(Podcast);