import React from 'react';

import '../../assets/styles/components/Teacher.scss';

import Comillas from '../../assets/static/images/svg/comillas.svg'

const Phrase = () => (
    <section className="about__us__focus__phrase">
        <div className="about__us__focus__phrase__inside">
            <img className="about__us__focus__phrase__img" src={Comillas} alt=""/>
            <h1 className="about__us__focus__phrase__title">Dolor in hendrerit in asaea vulputate velit ser tum esse molestie consequat.</h1>
            <h5 className="about__us__focus__phrase__sub">Juan Pablo Laco</h5>
            <i className="about__us__focus__phrase__author">Director de Focus Mind</i>
        </div>
    </section>
)
export default Phrase;