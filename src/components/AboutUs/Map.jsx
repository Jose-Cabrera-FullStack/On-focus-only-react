import React from 'react';

import '../../assets/styles/components/Teacher.scss';

import Human from '../../assets/static/images/img/human-photo.png'
import Mapa from '../../assets/static/images/img/map.png'
import GPS from '../../assets/static/images/svg/gps.svg'
import Profile from '../../assets/static/images/svg/profile-mini.svg'


const Map = () => (
    <section className="about__us__focus__map">
        <div className="about__us__focus__map__inside">
            <div className="flex">
                <div>
                    <img className="about__us__focus__map__inside__img" src={Human} alt="Foto de Profesor"/>
                    <h2 className="about__us__focus__map__inside__title">Dolor in hendrerit in vulputate velitmolestie consequat.</h2>
                    <div className="flex">
                        <div className="about__us__focus__map__inside__box">
                            <p className="about__us__focus__map__inside__number" >10</p>
                            <div className="about__us__focus__map__inside__data flex">
                                <img src={GPS} alt=""/>
                                <p className="about__us__focus__map__inside__data__text">países.</p>
                            </div>
                        </div>
                        <div>
                            <p className="about__us__focus__map__inside__number">456</p>
                            <div className="flex">
                                <img src={Profile} alt=""/>
                                <p className="about__us__focus__map__inside__data__text">Alumnos.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <figure>
                        <img src={Mapa} alt="Mapa de donde operamos"/>
                    </figure>
                </div>

            </div>
        </div>
    </section>
)
export default Map;