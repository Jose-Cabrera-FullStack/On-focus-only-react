import React from 'react';

import '../../../assets/styles/components/CoursePlus.scss';

const Menu = ({isSwitch,All,Progress,Finish}) => {

    return(
        <div className="flex">
            <p className="my-course__menu" onClick={All}>Todos</p>
            <p className="my-course__menu" onClick={Progress}>En curso</p>
            <p className="my-course__menu" onClick={Finish}>Finalizados</p>
        </div>
)}
export default Menu;