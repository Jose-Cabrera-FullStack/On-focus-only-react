import React from 'react';
import {connect} from 'react-redux';

import Hero from '../components/Podcast/Hero'
import Information from '../components/Podcast/Information'
import '../assets/styles/App.scss';

const Podcast = () => {

  return(
    <div className="App">
        <Hero/>
        <Information/>

    </div>

  );
}

export default connect(null,null)(Podcast);