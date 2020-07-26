import React, { useState, useEffect } from 'react';
import Vimeo from '@u-wave/react-vimeo';

import '../../../assets/styles/components/Visualization.scss';
import '../../../assets/styles/components/Course.scss';

const Video = ({ display, video }) => {
    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth);

    const handleWindowResize = () => {
        setScreenWidth(window.innerWidth);
      };

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return(
    <div className={"visualization__video" + " " + display}>
        <Vimeo
        video={video ? video : "76979871"}
        width={screenWidth < 1024 ? "" : "661px"}
        />
    </div>
)}
export default Video;