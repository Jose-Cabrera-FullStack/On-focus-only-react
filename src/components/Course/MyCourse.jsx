import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/CoursePlus.scss';

import Promo from '../../assets/static/images/svg/rectangle-promo.svg'
import Class1 from '../../assets/static/images/img/ui-design.png'
import Arrow from '../../assets/static/images/svg/arrow-right.svg'
import ProgressBar from '../../assets/static/images/svg/progress-bar.svg'


const MyCourse = () => (
    <section class="my-course">
        <div className="flex">
            <p className="my-course__menu">Todos</p>
            <p className="my-course__menu">En curso</p>
            <p className="my-course__menu">Finalizados</p>
        </div>

        <div className="my-course__individual">
            
        <div class="discovery__box">
              <div class="discovery__box__img">
                <div>
                  <img
                    class="discovery__box__price__off"
                    src={Promo}
                    alt="Precio"
                  />
                  <div class="discovery__box__price__off__letter">
                    <p>30% OFF</p>
                  </div>
                </div>

                <img
                  src={Class1}
                  class="discovery__box__img__class"
                  alt="Imagen del Curso"
                />
              </div>

              <div class="discovery__box__info">
                <div class="discovery__box__info__padding">
                  <h2 class="discovery__box__info__title">
                    Aprendé a ser mejor lider.
                  </h2>
                  <div class="flex">
                    <p class="discovery__box__info__name">Marketing</p>
                  </div>
                  <div>
                      <img src={ProgressBar} alt=""/>
                  </div>
                  <div>
                    <Link to='/curso'>
                    <button
                      class="btn__secundary btn__secundary--buy discovery__box__position btn__secundary--my-course"
                      >
                      <div class="flex btn__arrow__buy">
                        <img src={Arrow} alt="" />
                        <p>Continua</p>
                      </div>
                    </button>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
        
        <div class="discovery__box">
              <div class="discovery__box__img">
                <div>
                  <img
                    class="discovery__box__price__off"
                    src={Promo}
                    alt="Precio"
                  />
                  <div class="discovery__box__price__off__letter">
                    <p>30% OFF</p>
                  </div>
                </div>

                <img
                  src={Class1}
                  class="discovery__box__img__class"
                  alt="Imagen del Curso"
                />
              </div>

              <div class="discovery__box__info">
                <div class="discovery__box__info__padding">
                  <h2 class="discovery__box__info__title">
                    Aprendé a ser mejor lider.
                  </h2>
                  <div class="flex">
                    <p class="discovery__box__info__name">Marketing</p>
                  </div>
                  <div>
                      <img src={ProgressBar} alt=""/>
                  </div>
                  <div>
                    <Link to='/curso'>
                    <button
                      class="btn__secundary btn__secundary--buy discovery__box__position btn__secundary--my-course"
                      >
                      <div class="flex btn__arrow__buy">
                        <img src={Arrow} alt="" />
                        <p>Continua</p>
                      </div>
                    </button>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
        
        <div class="discovery__box">
              <div class="discovery__box__img">
                <div>
                  <img
                    class="discovery__box__price__off"
                    src={Promo}
                    alt="Precio"
                  />
                  <div class="discovery__box__price__off__letter">
                    <p>30% OFF</p>
                  </div>
                </div>

                <img
                  src={Class1}
                  class="discovery__box__img__class"
                  alt="Imagen del Curso"
                />
              </div>

              <div class="discovery__box__info">
                <div class="discovery__box__info__padding">
                  <h2 class="discovery__box__info__title">
                    Aprendé a ser mejor lider.
                  </h2>
                  <div class="flex">
                    <p class="discovery__box__info__name">Marketing</p>
                  </div>
                  <div>
                      <img src={ProgressBar} alt=""/>
                  </div>
                  <div>
                    <Link to='/curso'>
                    <button
                      class="btn__secundary btn__secundary--buy discovery__box__position btn__secundary--my-course"
                      >
                      <div class="flex btn__arrow__buy">
                        <img src={Arrow} alt="" />
                        <p>Continua</p>
                      </div>
                    </button>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
        
        </div>

    </section>
)
export default MyCourse;