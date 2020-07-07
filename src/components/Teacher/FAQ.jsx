import React from 'react';

import '../../assets/styles/components/Course.scss';
import ArrowDown from '../../assets/static/images/svg/arrow-down.svg';

import Module from './Module/Module'

const TeacherFAQ = () => {

    return(
    <section className="teacher__faq">
        <h1>Preguntas Frecuentes</h1>
        <div className="flex display__screen__mobile__without__flex--FAQ__teacher">
            <div >   
                <ul>
                
                    <Module helpCenter/>
                    <Module helpCenter/>
                    <Module helpCenter/>
                
            </ul>
            </div>
            <div className="teacher__faq__box__right">
            <ul>
                    <Module helpCenter/>
                    <Module helpCenter/>
                    <Module helpCenter/>
            </ul>
            </div>
        </div>
    </section>
)}
export default TeacherFAQ;