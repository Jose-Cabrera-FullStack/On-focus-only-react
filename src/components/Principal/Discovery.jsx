import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/Course.scss';
import '../../assets/styles/components/Courses.scss';

import Course from './Course/Course';

import Diploma from './Diploma/Diploma';

import Class1 from '../../assets/static/images/img/ui-design.png'
import Class2 from '../../assets/static/images/img/ui-design-1.png'
import Class3 from '../../assets/static/images/img/ui-design-2.png'
import Class4 from '../../assets/static/images/img/ui-design-3.png'


const Discovery = (props) => {
  return(
    <section className="discovery">
      <div className="discovery__container">
        <h2 className="discovery__title">
          {props.info ? props.info : 'Descubre la plataforma lider en negocios y emprendimiento.'}
        </h2>

        <div className=" flex">
          <div className={"discovery__course" + " " + props.column}>

            <Course img={Class1}/>

            <Course img={Class2}/>

            <Course img={Class3}/>

            <Course img={Class4}/>
    
          </div>

            <Diploma/>

          </div>
      </div>
    </section>
)}
export default Discovery;