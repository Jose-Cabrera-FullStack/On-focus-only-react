import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/CoursePlus.scss';
import Button from '../../components/Utils/ButtonArrowRight';

import Class1 from '../../assets/static/images/img/ui-design.png'
import ProgressBar from '../../assets/static/images/svg/progress-bar.svg'


const MyCourse = () => (
    <section className="my-course">
        <div className="flex">
            <p className="my-course__menu">Todos</p>
            <p className="my-course__menu">En curso</p>
            <p className="my-course__menu">Finalizados</p>
        </div>

        <div className="my-course__individual">
            
        <div className="discovery__box">
              <div className="discovery__box__img">
                <img
                  src={Class1}
                  className="discovery__box__img__class"
                  alt="Imagen del Curso"
                />
              </div>
              <div className="discovery__box__info">
                <div className="discovery__box__info__padding">
                  <h2 className="discovery__box__info__title course__plus__title">
                    Aprendé a ser mejor lider.
                  </h2>
                  <div className="flex">
                    <p className="discovery__box__info__name course__plus__sub__title">Marketing</p>
                  </div>
                  <div className="course__plus__progress">
                      <img src={ProgressBar} alt=""/>
                  </div>
                  <div>
                    <Link to='/curso'>
                    <Button text={'Continuar'} margin={"btn__secundary--my-course"}/>
                      </Link>
                  </div>
                </div>
              </div> 
            </div>
        <div className="discovery__box">
              <div className="discovery__box__img">
                <img
                  src={Class1}
                  className="discovery__box__img__class"
                  alt="Imagen del Curso"
                />
              </div>
              <div className="discovery__box__info">
                <div className="discovery__box__info__padding">
                  <h2 className="discovery__box__info__title course__plus__title">
                    Aprendé a ser mejor lider.
                  </h2>
                  <div className="flex">
                    <p className="discovery__box__info__name course__plus__sub__title">Marketing</p>
                  </div>
                  <div className="course__plus__progress">
                      <img src={ProgressBar} alt=""/>
                  </div>
                  <div>
                    <Link to='/curso'>
                    <Button text={'Continuar'} margin={"btn__secundary--my-course"}/>
                      </Link>
                  </div>
                </div>
              </div> 
            </div>
        <div className="discovery__box">
              <div className="discovery__box__img">
                <img
                  src={Class1}
                  className="discovery__box__img__class"
                  alt="Imagen del Curso"
                />
              </div>
              <div className="discovery__box__info">
                <div className="discovery__box__info__padding">
                  <h2 className="discovery__box__info__title course__plus__title">
                    Aprendé a ser mejor lider.
                  </h2>
                  <div className="flex">
                    <p className="discovery__box__info__name course__plus__sub__title">Marketing</p>
                  </div>
                  <div className="course__plus__progress">
                      <img src={ProgressBar} alt=""/>
                  </div>
                  <div>
                    <Link to='/curso'>
                    <Button text={'Continuar'} margin={"btn__secundary--my-course"}/>
                      </Link>
                  </div>
                </div>
              </div> 
            </div>

        </div>

    </section>
)
export default MyCourse;