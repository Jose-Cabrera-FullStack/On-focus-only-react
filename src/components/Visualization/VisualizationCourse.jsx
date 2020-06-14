import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/Visualization.scss';

import ArrowLeft from '../../assets/static/images/svg/arrow-visualization.svg'
import ArrowUp from '../../assets/static/images/svg/arrow-up.svg'
import Video from '../../assets/static/images/img/video.png'

const VisualizationCourse = () => (
    <section class="visualization">
      <div className="visualization__navbar flex">
        <img src={ArrowLeft} alt="Flecha a la derecha"/>
        <h2>Volver al curso</h2>
      </div>

      <div className="visualization__grid">
        <div className="visualization__sidebar">
          <ol>
            <li className="visualization__sidebar__list">
              <div className="visualization__sidebar__list__box flex">
                <div>
                <h5 className="visualization__sidebar__title">Módulo 1 - 15 min</h5>
                <p className="visualization__sidebar__text">Lorem ipsum dolor sit amet.</p>
                </div>
                <img className="visualization__sidebar__arrow" src={ArrowUp} alt="Flecha hacia arriba"/>
              </div>
            </li>
            <li className="visualization__sidebar__list">
              <div className="visualization__sidebar__list__box flex">
                <div>
                <h5 className="visualization__sidebar__title">Módulo 1 - 15 min</h5>
                <p className="visualization__sidebar__text">Lorem ipsum dolor sit amet.</p>
                </div>
                <img className="visualization__sidebar__arrow" src={ArrowUp} alt="Flecha hacia arriba"/>
              </div>
            </li>
            <li className="visualization__sidebar__list">
              <div className="visualization__sidebar__list__box flex">
                <div>
                <h5 className="visualization__sidebar__title">Módulo 1 - 15 min</h5>
                <p className="visualization__sidebar__text">Lorem ipsum dolor sit amet.</p>
                </div>
                <img className="visualization__sidebar__arrow" src={ArrowUp} alt="Flecha hacia arriba"/>
              </div>
            </li>
            <li className="visualization__sidebar__list">
              <div className="visualization__sidebar__list__box flex">
                <div>
                <h5 className="visualization__sidebar__title">Módulo 1 - 15 min</h5>
                <p className="visualization__sidebar__text">Lorem ipsum dolor sit amet.</p>
                </div>
                <img className="visualization__sidebar__arrow" src={ArrowUp} alt="Flecha hacia arriba"/>
              </div>
            </li>
            <li className="visualization__sidebar__list">
              <div className="visualization__sidebar__list__box flex">
                <div>
                <h5 className="visualization__sidebar__title">Módulo 1 - 15 min</h5>
                <p className="visualization__sidebar__text">Lorem ipsum dolor sit amet.</p>
                </div>
                <img className="visualization__sidebar__arrow" src={ArrowUp} alt="Flecha hacia arriba"/>
              </div>
            </li>
            <li className="visualization__sidebar__list">
              <div className="visualization__sidebar__list__box flex">
                <div>
                <h5 className="visualization__sidebar__title">Módulo 1 - 15 min</h5>
                <p className="visualization__sidebar__text">Lorem ipsum dolor sit amet.</p>
                </div>
                <img className="visualization__sidebar__arrow" src={ArrowUp} alt="Flecha hacia arriba"/>
              </div>
            </li>
            <li className="visualization__sidebar__list">
              <div className="visualization__sidebar__list__box flex">
                <div>
                <h5 className="visualization__sidebar__title">Módulo 1 - 15 min</h5>
                <p className="visualization__sidebar__text">Lorem ipsum dolor sit amet.</p>
                </div>
                <img className="visualization__sidebar__arrow" src={ArrowUp} alt="Flecha hacia arriba"/>
              </div>
            </li>
          </ol>
        </div>
        <div className="visualization__video"></div>
      </div>
    

    </section>
)
export default VisualizationCourse;