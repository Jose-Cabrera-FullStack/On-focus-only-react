import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/styles/components/Visualization.scss';
import '../../assets/styles/components/Course.scss';
import Video from '../../assets/static/images/img/video.png';


const SmallVideo = (props) => (
    <figure class={"course__img"+ " " + props.OnlyDesktop}>
        <img className={props.onlyMobile} src={Video} alt="Video del Curso"/>
    </figure>
)
export default SmallVideo;