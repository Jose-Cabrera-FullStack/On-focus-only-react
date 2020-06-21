import React from 'react';
import {connect} from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Profile/Hero';
import Data from '../components/Profile/Data';



import '../assets/styles/App.scss';
import '../assets/styles/components/Data.scss';

const MyProfile = () => {
  return(
    <div className="App"> 
            <Header/> 
            <Hero/> 
            <Data/>
            <Footer/>

    </div>

  );
}

export default connect(null,null)(MyProfile);