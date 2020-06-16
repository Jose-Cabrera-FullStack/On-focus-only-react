import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/Course.scss';
import Teacher from '../../assets/static/images/img/profile-teach.png';
import Facebook from '../../assets/static/images/svg/facebook-black.svg';
import Linkedin from '../../assets/static/images/svg/linkedin-black.svg';
import Twitter from '../../assets/static/images/svg/twitter-black.svg';
import Youtube from '../../assets/static/images/svg/youtube-black.svg';
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
                  <div>
                      <div class="flex">
                          <img src={Teacher} alt="Foto del profesor"/>
                          <div class="course__teach">
                              <h3>Juan Pablo Laco</h3>
                              <p>Lic. Lorem ipsum - Lorem ipsum</p>
                              <div class="flex">
                                  <p>Seguir:</p>
                                  <div class="flex">
                                    <img src={Linkedin} alt="Instagram"/>
                                    <img src={Facebook} alt="Twitter"/>
                                    <img src={Twitter} alt="Facebook"/>
                                    <img src={Youtube} alt="LinkedIn"/>
                                    <img src={Facebook} alt="Youtube"/>
                                  </div>
    
                              </div>
                          </div>
                      </div>
                      <p className="course__teach__info">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt veniam. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>

                  </div>
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
