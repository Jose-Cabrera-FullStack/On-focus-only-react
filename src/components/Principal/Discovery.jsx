import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/Course.scss';
import '../../assets/styles/components/Courses.scss';
import Shopping from '../Utils/ShoppingCarSquare';

import Promo from '../../assets/static/images/svg/rectangle-promo.svg'
import Class1 from '../../assets/static/images/img/ui-design.png'
import Class2 from '../../assets/static/images/img/ui-design-1.png'
import Class3 from '../../assets/static/images/img/ui-design-2.png'
import Class4 from '../../assets/static/images/img/ui-design-3.png'
import User from '../../assets/static/images/svg/user.svg'
import Star from '../../assets/static/images/svg/star.svg'
import Diploma from '../../assets/static/images/img/diploma.png'


const Discovery = (props) => {
  return(
    <section className="discovery">
      <div className="discovery__container">
        <h2 className="discovery__title">
          {props.info ? props.info : 'Descubre la plataforma lider en negocios y emprendimiento.'}
        </h2>

        <div className=" flex">
          <div className={"discovery__course" + " " + props.column}>
            <div className="discovery__box">
              <div className="discovery__box__img">
                <div>
                  <img
                    className="discovery__box__price__off"
                    src={Promo}
                    alt="Precio"
                  />
                  <div className="discovery__box__price__off__letter">
                    <p>30% OFF</p>
                  </div>
                </div>

                <img
                  src={Class1}
                  className="discovery__box__img__class"
                  alt="Imagen del Curso"
                />
              </div>

              <div className="discovery__box__info">
                <div className="discovery__box__info__padding">
                  <h2 className="discovery__box__info__title">
                    Aprendé a ser mejor lider.
                  </h2>
                  <div className="flex">
                    <p className="discovery__box__info__name">Marketing</p>
                    <i className="discovery__box__info__teach">Por Juan Pablo Laco</i>
                  </div>
                  <div className="flex discovery__box__info--fix">
                    <img src={User} alt="user" />
                    <p className="discovery__box__info__student">150 alumnos</p>
                  </div>
                  <div className="flex">
                    <h2 className="discovery__box__info__price">AR$ 490</h2>
                    <i className="discovery__box__info__price__before">Antes <strong>AR$ 699</strong></i>
                  </div>
                  <div className="flex">
                  <Link to='/curso'>
                    <button
                      className="btn__secundary btn__secundary--buy discovery__box__position"
                      >
                      <div className="flex btn__arrow__buy">
                      <span className="icon btn__arrow__buy__img" alt="Ícono de flecha a la derecha"></span>
                        <p>Comprarlo ahora</p>
                      </div>
                    </button>
                      </Link>
                    <Shopping/>
                  </div>
                </div>
              </div>
            </div>
            <div className="discovery__box">
              <div className="discovery__box__img">
                <div>
                  <img
                    className="discovery__box__price__off"
                    src={Promo}
                    alt="Precio"
                  />
                  <div className="discovery__box__price__off__letter">
                    <p>30% OFF</p>
                  </div>
                </div>
                <img
                  src={Class2}
                  className="discovery__box__img__class"
                  alt="Imagen del Curso"
                />
              </div>

              <div className="discovery__box__info">
                <div className="discovery__box__info__padding">
                  <h2 className="discovery__box__info__title">
                    Aprendé a ser mejor lider.
                  </h2>
                  <div className="flex">
                    <p className="discovery__box__info__name">Marketing</p>
                    <i className="discovery__box__info__teach">Por Juan Pablo Laco</i>
                  </div>
                  <div className="flex discovery__box__info--fix">
                    <img src={User} alt="user" />
                    <p className="discovery__box__info__student">150 alumnos</p>
                  </div>
                  <div className="flex">
                    <h2 className="discovery__box__info__price">AR$ 490</h2>
                    <i className="discovery__box__info__price__before">Antes <strong>AR$ 699</strong></i>
                  </div>
                  <div className="flex">
                  <Link to='/curso'>
                    <button
                      className="btn__secundary btn__secundary--buy discovery__box__position"
                      >
                      <div className="flex btn__arrow__buy">
                      <span className="icon btn__arrow__buy__img" alt="Ícono de flecha a la derecha"></span>
                        <p>Comprarlo ahora</p>
                      </div>
                    </button>
                      </Link>
                <Shopping/>                  
                </div>
                </div>
              </div>
            </div>
            <br />
            <div className={"discovery__box" + " " + props.none}>
              <div className="discovery__box__img">
                <div>
                  <img
                    className="discovery__box__price__off"
                    src={Promo}
                    alt="Precio"
                  />
                  <div className="discovery__box__price__off__letter">
                    <p>30% OFF</p>
                  </div>
                </div>
                <img
                  src={Class3}
                  className="discovery__box__img__class"
                  alt="Imagen del Curso"
                />
              </div>

              <div className="discovery__box__info">
                <div className="discovery__box__info__padding">
                  <h2 className="discovery__box__info__title">
                    Aprendé a ser mejor lider.
                  </h2>
                  <div className="flex">
                    <p className="discovery__box__info__name">Marketing</p>
                    <i className="discovery__box__info__teach">Por Juan Pablo Laco</i>
                  </div>
                  <div className="flex discovery__box__info--fix">
                    <img src={User} alt="user" />
                    <p className="discovery__box__info__student">150 alumnos</p>
                  </div>
                  <div className="flex">
                    <h2 className="discovery__box__info__price">AR$ 490</h2>
                    <i className="discovery__box__info__price__before">Antes <strong>AR$ 699</strong></i>
                  </div>
                  <div className="flex">
                  <Link to='/curso'>
                    <button
                      className="btn__secundary btn__secundary--buy discovery__box__position"
                      >
                      <div className="flex btn__arrow__buy">
                      <span className="icon btn__arrow__buy__img" alt="Ícono de flecha a la derecha"></span>
                        <p>Comprarlo ahora</p>
                      </div>
                    </button>
                      </Link>
                  <Shopping/>                  
                </div>
                </div>
              </div>
            </div>

            <div className={"discovery__box" + " " + props.display}>
              <div className="discovery__box__img">
                <div>
                  <img
                    className="discovery__box__price__off"
                    src={Promo}
                    alt="Precio"
                  />
                  <div className="discovery__box__price__off__letter">
                    <p>30% OFF</p>
                  </div>
                </div>
                <img
                  src={Class4}
                  className="discovery__box__img__class"
                  alt="Imagen del Curso"
                />
              </div>

              <div className="discovery__box__info">
                <div className="discovery__box__info__padding">
                  <h2 className="discovery__box__info__title">
                    Aprendé a ser mejor lider.
                  </h2>
                  <div className="flex">
                    <p className="discovery__box__info__name">Marketing</p>
                    <i className="discovery__box__info__teach">Por Juan Pablo Laco</i>
                  </div>
                  <div className="flex discovery__box__info--fix">
                    <img src={User} alt="user" />
                    <p className="discovery__box__info__student">150 alumnos</p>
                  </div>
                  <div className="flex">
                    <h2 className="discovery__box__info__price">AR$ 490</h2>
                    <i className="discovery__box__info__price__before">Antes <strong>AR$ 699</strong></i>
                  </div>
                  <div className="flex">
                  <Link to='/curso'>
                    <button
                      className="btn__secundary btn__secundary--buy discovery__box__position"
                      >
                      <div className="flex btn__arrow__buy">
                      <span className="icon btn__arrow__buy__img" alt="Ícono de flecha a la derecha"></span>
                        <p>Comprarlo ahora</p>
                      </div>
                    </button>
                      </Link>
                <Shopping/>                  
                </div>
                </div>
              </div>
            </div>
            </div>

          <div className={"discovery__diploma"+ " " + props.display}>
            <img
              className="discovery__diploma__star"
              src={Star}
              alt="star"
            />
            <h2 className="discovery__diploma__title">Obten tu diploma.</h2>
            <p className="discovery__diploma__text">
              Al terminar un curso obtendrás un certificado digital que
              certifica el curso.
            </p>
            <img
              className="discovery__diploma__img"
              src={Diploma}
              alt="diploma"
            />
          </div>
          </div>
      </div>
    </section>
)}
export default Discovery;