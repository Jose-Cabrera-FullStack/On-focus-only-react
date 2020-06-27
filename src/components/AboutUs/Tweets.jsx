import React from 'react';

import '../../assets/styles/components/Teacher.scss';
import Photo from '../../assets/static/images/img/profile-twitter.png'
import Logo from '../../assets/static/images/svg/icon-twitter.svg'
import Arrow from '../../assets/static/images/svg/arrow-left-twitter.svg'

const Tweets = () => (
    <section className="about__us__focus__tweets">

        <div className="about__us__focus__tweets__box">
            <div className="about__us__focus__tweets__box__inside">
                <div className="flex">
                    <img className="about__us__focus__tweets__box__img" src={Photo} alt="Perfil de Twitter"/>
                    <div>
                        <h4 className="about__us__focus__tweets__box__inside__name">loremipsum</h4>
                        <i className="about__us__focus__tweets__box__inside__nick">@loremipsum12</i>
                    </div>
                    <img className="about__us__focus__tweets__box__inside__logo" src={Logo} alt="Logo de Twitter"/>
                </div>
                <p className="about__us__focus__tweets__box__inside__text">Llum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio @Onfocus qui blandit praesent luptatum zzril delenit augue duis dolore te feugait.</p>
                <p className="about__us__focus__tweets__box__inside__time">16:21 - 13 nov. 2019 </p>
                <hr/>
                <div className="flex">

                    <strong className="about__us__focus__tweets__box__inside__link">Ver otros Tweets de Loremipsum </strong>
                    <img className="about__us__focus__tweets__box__inside__arrow" src={Arrow} alt="Flecha a la derecha"/>
                </div>
            </div>
        </div>
        
        <div className="about__us__focus__tweets__box">
            <div className="about__us__focus__tweets__box__inside">
                <div className="flex">
                    <img className="about__us__focus__tweets__box__img" src={Photo} alt="Perfil de Twitter"/>
                    <div>
                        <h4 className="about__us__focus__tweets__box__inside__name">loremipsum</h4>
                        <i className="about__us__focus__tweets__box__inside__nick">@loremipsum12</i>
                    </div>
                    <img className="about__us__focus__tweets__box__inside__logo" src={Logo} alt="Logo de Twitter"/>
                </div>
                <p className="about__us__focus__tweets__box__inside__text">Llum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio @Onfocus qui blandit praesent luptatum zzril delenit augue duis dolore te feugait.</p>
                <p className="about__us__focus__tweets__box__inside__time">16:21 - 13 nov. 2019 </p>
                <hr/>
                <div className="flex">

                    <strong className="about__us__focus__tweets__box__inside__link">Ver otros Tweets de Loremipsum </strong>
                    <img className="about__us__focus__tweets__box__inside__arrow" src={Arrow} alt="Flecha a la derecha"/>
                </div>
            </div>
        </div>
        
        <div className="about__us__focus__tweets__box">
            <div className="about__us__focus__tweets__box__inside">
                <div className="flex">
                    <img className="about__us__focus__tweets__box__img" src={Photo} alt="Perfil de Twitter"/>
                    <div>
                        <h4 className="about__us__focus__tweets__box__inside__name">loremipsum</h4>
                        <i className="about__us__focus__tweets__box__inside__nick">@loremipsum12</i>
                    </div>
                    <img className="about__us__focus__tweets__box__inside__logo" src={Logo} alt="Logo de Twitter"/>
                </div>
                <p className="about__us__focus__tweets__box__inside__text">Llum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio @Onfocus qui blandit praesent luptatum zzril delenit augue duis dolore te feugait.</p>
                <p className="about__us__focus__tweets__box__inside__time">16:21 - 13 nov. 2019 </p>
                <hr/>
                <div className="flex">

                    <strong className="about__us__focus__tweets__box__inside__link">Ver otros Tweets de Loremipsum </strong>
                    <img className="about__us__focus__tweets__box__inside__arrow" src={Arrow} alt="Flecha a la derecha"/>
                </div>
            </div>
        </div>
        
    </section>
)
export default Tweets;