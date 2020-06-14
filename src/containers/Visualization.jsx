import React from 'react';
import {connect} from 'react-redux';

import VisualizationCourse from '../components/Visualization/VisualizationCourse';

import '../assets/styles/App.scss';

const Visualization = () => {

  return(
    <div className="App">
         
        <VisualizationCourse/>

    
    </div>

  );
}

export default connect(null,null)(Visualization);