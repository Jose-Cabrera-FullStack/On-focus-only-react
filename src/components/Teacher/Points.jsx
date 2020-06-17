import React from 'react';

import '../../assets/styles/components/Teacher.scss';

import Human1 from '../../assets/static/images/img/teacher-1.png'
import Human2 from '../../assets/static/images/img/teacher-2.png'
import Human3 from '../../assets/static/images/img/teacher-3.png'
import Human4 from '../../assets/static/images/img/teacher-4.png'

const Points = (props) => (
        <section className="teacher__points">
                <div class={"how__we__tech__container" + ' '+ props.grid}>
        <div class="how__we__tech__info">
          <figure>
            <img
              class="how__we__tech__info__img"
              src={Human1}
              alt="human happy"
            />
          </figure>
          <h5 class="how__we__tech__info__title">Enseña una vez y gana para siempre.</h5>
          <p class="how__we__tech__info__text">
          Obtendrás comisiones por las ventas que haga el curso, para siempre.
          </p>
        </div>
        <div class="how__we__tech__info">
          <figure class="how__we__tech__info__figure">
            <img
              class="how__we__tech__info__img--2"
              src={Human2}
              alt="human happy"
            />
          </figure>
          <h5 class="how__we__tech__info__title">Tu enseña y nos encargamos del resto.</h5>
          <p class="how__we__tech__info__text">
            On Focus se encarga de grabar, producir tu curso y lanzarlo.
          </p>
        </div>
        <div class="how__we__tech__info">
          <figure class="how__we__tech__info__figure">
            <img
              class="how__we__tech__info__img"
              src={Human3}
              alt="human happy"
            />
          </figure>
          <h5 class="how__we__tech__info__title">Consigue consultorías privadas.</h5>
          <p class="how__we__tech__info__text">
          Los alumnos pueden contactarte para contratar tus servicios de manera privada.
          </p>
        </div>
        <div class="how__we__tech__info">
          <figure class="how__we__tech__info__figure">
            <img
              class="how__we__tech__info__img"
              src={Human4}
              alt="human happy"
            />
          </figure>
          <h5 class="how__we__tech__info__title">Inspira y transmite tu conocimiento a todo Hispanoamérica.</h5>
          <p class="how__we__tech__info__text">
          Los cursos de On Focus son vistos por estudiantes en más de 15 países.
          </p>
        </div>
     
      </div>
        </section>
)
export default Points;