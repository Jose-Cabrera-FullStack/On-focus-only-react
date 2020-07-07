import React from 'react';

import '../../../assets/styles/components/ShoppingCar.scss';
import Module from '../../Course/Module/Module'

const HelpCenter = (props) => {
    const text = 'Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam era. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
    return(
        <div className="politicy__inside__right">
           <h2>Centro de Ayuda</h2>
            <Module text={text} helpCenter/>
            <Module text={text} helpCenter/>
            <Module text={text} helpCenter/>
            <Module text={text} helpCenter/>
            <Module text={text} helpCenter/>

           <h3 className="politicy__inside__right__title--help__center">Lorem ipsum dolor sit amet.</h3>
            <p className="politicy__inside__right__text--help__center">
                Ut wisi enim ad minim veniam. Duis autem vel eum iriure dolor hendrerit in vulputate <a className="politicy__inside__right__title--help__center__link" href=""> ayuda@onfocus.com</a>            
            </p>
        </div>
)}
export default HelpCenter;