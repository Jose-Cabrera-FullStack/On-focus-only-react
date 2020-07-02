import React from 'react';

import '../../../assets/styles/components/CoursePlus.scss';

const CourseInfo = (props) => (
      <div className={props.OnlyDesktop}>
        <h2 className="discovery__box__info__title course__section">
            Aprendé a ser mejor lider.
            </h2> 
            <div className="course__section__name flex">
            <p className="discovery__box__info__name">Marketing</p>
            <i className="discovery__box__info__teach course__section__tech">- Por Juan Pablo Laco</i>
            </div>
      </div>
)
export default CourseInfo;