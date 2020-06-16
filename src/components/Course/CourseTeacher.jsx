import React from 'react';



import '../../assets/styles/components/Course.scss';
import CourseTeacherInfo from './CourseTeacherInfo'
import ShoppingCar from '../../assets/static/images/svg/shopping-car-squad.svg';



const CourseTeacher = () => (
    <section class="course">
            <h2 class="discovery__box__info__title course__section">
                Sobre el profesor.
              </h2> 
              <div class="flex">
                <p class="discovery__box__info__name">Marketing</p>
                <i class="discovery__box__info__teach course__section__tech">- Por Juan Pablo Laco</i>
              </div>
    
              <div class="flex">
                  <CourseTeacherInfo/>
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

        </section>
)
export default CourseTeacher;
