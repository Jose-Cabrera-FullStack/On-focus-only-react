import React from 'react';

import '../../assets/styles/components/Teacher.scss';

import Logo from '../../assets/static/images/img/logo-about-us.png'


const Future = () => (
    <section className="about__us__focus__future">
       <div className="flex">
            <img className="about__us__focus__future__img" src={Logo} alt=""/>
            <div>
                <h1 className="about__us__focus__future__title">On Focus es la plataforma que prepara a los emprendedores y profesionales del futuro. </h1>
                <p className="about__us__focus__future__text">Ut wisi enim ad minim veniam. Duis autem vel eum iriure dolor in hendrerit in vulputate velit. Ut wisi enim ad minim veniam. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>
            </div>
       </div>
    </section>
)
export default Future;