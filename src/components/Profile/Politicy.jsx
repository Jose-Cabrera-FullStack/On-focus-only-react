import React from 'react';

import '../../assets/styles/components/Data.scss';

const Politicy = () => {
  return (
    <section class="data"> 
    <div className="flex">
        <div>
            <button class="btn__secundary btn__secundary--buy btn__secundary--politicy">
                    <p className="btn__secundary--politicy__text">Politica de Cookie</p>
            </button>
            <br/>
            <button class="btn__secundary btn__secundary--buy btn__secundary--politicy">
                    <p className="btn__secundary--politicy__text">Términos y Condiciones</p>
            </button>
            <br/>
            <button class="btn__secundary btn__secundary--buy btn__secundary--politicy">
                    <p className="btn__secundary--politicy__text">Centro de ayuda</p>
            </button>
        </div>
        <div className="politicy__inside__left">
            <h2>Políticas de Cookie</h2>
            <h5>Políticas de Cookie</h5>

            <p>Lorem ipsum dolor sit amet. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
        </div>

    </div>
 
    </section>
)}
export default Politicy;