import React from 'react';
import {Link} from 'react-router-dom';

import CourseInfoOnlyInfo from './CourseInfoOnlyInfo'
import CourseAbout from './CourseAbout'

import '../../assets/styles/components/CoursePlus.scss';
import Video from '../../assets/static/images/img/video.png';
import ShoppingCar from '../../assets/static/images/svg/shopping-car-squad.svg';

const CourseInfo = () => (
    <section class="course">
    <h2 class="discovery__box__info__title course__section">
        Aprendé a ser mejor lider.
      </h2> 
      <div class="flex">
        <p class="discovery__box__info__name">Marketing</p>
        <i class="discovery__box__info__teach course__section__tech">- Por Juan Pablo Laco</i>
      </div>

      <div class="flex">
          <figure class="course__img">
              <img src={Video} alt="Video del Curso"/>
            </figure>
            <div class="discovery__box__info discovery__box__info--course">
                <div class="discovery__box__info__inside">
                    <h2 class="discovery__box__info__inside__title">Lorem ipsum dolor sit amet sed diam nonummy.</h2>
                    <p class="discovery__box__info__inside__text">Lorem ipsum dolor sit amet, consectse diam nonummy nibh euismod tincidunt.</p>
                    <div class="flex">
                        <h1 class="discovery__box__info__inside__price">AR$ 490</h1>
                        <h4 class="discovery__box__info__inside__save">Ahorras AR$ 209</h4>
                    </div>
                    <div class="flex">
                        <p class="discovery__box__info__inside__before">ANTES AR$ 699</p>
                        <p class="width: 106px;">- Dcto. 30%</p>
                    </div>
                    <div>
                        <button class="btn__secundary btn__secundary--buy"> Comprarlo ahora</button>
                        <img 
                        src={ShoppingCar}
                        alt="shopping-car"
                        class="discovery__box__info__inside__shopping"
                        />
                    </div> 
                </div>
            </div>
    </div>
    <h1 className="course__info__title">Informacion</h1>
    <CourseInfoOnlyInfo/>   
    <CourseAbout/>   
    
</section>
)
export default CourseInfo;