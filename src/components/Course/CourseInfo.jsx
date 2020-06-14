import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/CoursePlus.scss';
import Video from '../../assets/static/images/img/video.png';
import Course from '../../assets/static/images/img/about-this-course.png';
import ShoppingCar from '../../assets/static/images/svg/shopping-car-squad.svg';
import Perfil from '../../assets/static/images/svg/perfil.svg';
import Reloj from '../../assets/static/images/svg/reloj.svg';
import Media from '../../assets/static/images/svg/media.svg';


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
    <div class="course__information">
        <h1>Informacion</h1>
        <div class="flex">

            <div class="flex">
                <img src={Perfil} alt="perfil"/>
                <p>150 alumnos.</p>
            </div>
            <div class="flex">
                <img src={Reloj} alt="perfil"/>
                <p>Duración del curso: 1 hora, 30 minutos. </p>
            </div>
            <div class="flex">
                <img src={Media} alt="perfil"/>
                <p>Cantidad de módulos: 6.</p>
            </div>
            
        </div>
        <div class="flex">
            <div class="flex">
                <img src={Reloj} alt="perfil"/>
                <p>Empezás y terminás cuando querés.</p>
            </div>
            <div class="flex">
                <img src={Media} alt="perfil"/>
                <p>Hacelo las veces que quieras.</p>
            </div>
        </div>
    </div>

    <div class="couse__about">
        <h1>Sobre este curso</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam. Duis autem vel eum iriure dolor in hendrerit in vulpu tate velit esse molestie consequat.</p>
        <img src={Course} alt=""/>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
    </div>
</section>
)
export default CourseInfo;