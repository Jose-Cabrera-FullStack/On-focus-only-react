import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/Course.scss';
import ArrowDown from '../../assets/static/images/svg/arrow-down.svg';

const TeacherFAQ = () => (
    <section class="teacher__faq">
        <h1>Preguntas Frecuentes</h1>
        <div className="flex">
            <div >   
                <ul>
                <li className="teacher__faq__box">
                    <div className="flex">
                        <p>¿Lorem ipsum dolor sit amet?</p>
                        <img src={ArrowDown} alt="Flecha hacia abajo"/>
                    </div>
                </li>
                <li className="teacher__faq__box">
                    <div className="flex">
                        <p>¿Lorem ipsum dolor sit amet?</p>
                        <img src={ArrowDown} alt="Flecha hacia abajo"/>
                    </div>
                </li>
                <li className="teacher__faq__box">
                    <div className="flex">
                        <p>¿Lorem ipsum dolor sit amet?</p>
                        <img src={ArrowDown} alt="Flecha hacia abajo"/>
                    </div>
                </li>
            </ul>
            </div>
            <div className="teacher__faq__box__right">
            <ul>
                <li className="teacher__faq__box">
                    <div className="flex">
                        <p>¿Lorem ipsum dolor sit amet?</p>
                        <img src={ArrowDown} alt="Flecha hacia abajo"/>
                    </div>
                </li>
                <li className="teacher__faq__box">
                    <div className="flex">
                        <p>¿Lorem ipsum dolor sit amet?</p>
                        <img src={ArrowDown} alt="Flecha hacia abajo"/>
                    </div>
                </li>
                <li className="teacher__faq__box">
                    <div className="flex">
                        <p>¿Lorem ipsum dolor sit amet?</p>
                        <img src={ArrowDown} alt="Flecha hacia abajo"/>
                    </div>
                </li>
            </ul>
            </div>
        </div>
    </section>
)
export default TeacherFAQ;