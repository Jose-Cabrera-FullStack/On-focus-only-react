import React from 'react';

import '../../assets/styles/components/Podcast.scss';

import Course from '../../assets/static/images/img/ui-design.png'
import Arrow from '../../assets/static/images/svg/arrow-right.svg'


const Information = () => (
        <section className="podcast__information">
            <h1>Lorem ipsum dolor sit amet sed diam, amet sed diam nonummy.</h1>
            <p className="podcast__information__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam. Duis autem vel eum iriure dolor in hendrerit in vulpu tate velit esse molestie consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            <h2>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo trud exerci tation ullamcorper.</h2>
            <p className="podcast__information__text">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto</p>
            <h1>Lorem ipsum dolor sit amet:</h1>
            <img src={Course} alt=""/>
            <h1>Aprendé a ser mejor lider.</h1>
            <i>Curso dictado por Juan Pablo Laco </i>
            <p className="podcast__information__text">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolo augue duis dolore te feugait nulla facilisi.</p>
            <button
                      class="btn__secundary btn__secundary--buy discovery__box__position"
                      >
                      <div class="flex btn__arrow__buy">
                        <img src={Arrow} alt="" />
                        <p>Comprarlo ahora</p>
                      </div>
                    </button>
        </section>
)
export default Information;