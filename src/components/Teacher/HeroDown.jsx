import React from 'react';

import '../../assets/styles/components/Teacher.scss';

import Hero from '../../assets/static/images/img/hero-teacher-down.png'
import Arrow from '../../assets/static/images/svg/arrow-right.svg'


const HeroDown = () => (
        <section className="teacher__course">
            <div className="flex">
                <img src={Hero} alt=""/>
                <h1>Lorem ipsum dolor sit amet dolor sit, lorem ipsum dolor sit. </h1>
                <button
                class="btn__secundary btn__secundary--buy btn__secundary--teacher"
                >
                <div class="flex btn__arrow__buy">
                <img src={Arrow} alt="" />
                <p>Quiero hacher un curso</p>
                </div>
            </button>
            </div>
        </section>
)
export default HeroDown;