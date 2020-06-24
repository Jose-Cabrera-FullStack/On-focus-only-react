import React from 'react';

import '../../../assets/styles/components/CoursePlus.scss';

const CourseInfo = (props) => (
      <div className={props.OnlyDesktop}>
        <h2 class="discovery__box__info__title course__section">
            Aprendé a ser mejor lider.
            </h2> 
            <div class="course__section__name flex">
            <p class="discovery__box__info__name">Marketing</p>
            <i class="discovery__box__info__teach course__section__tech">- Por Juan Pablo Laco</i>
            </div>
      </div>
)
export default CourseInfo;