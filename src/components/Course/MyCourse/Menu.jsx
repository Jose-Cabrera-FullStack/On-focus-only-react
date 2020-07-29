import React from 'react';

import '../../../assets/styles/components/CoursePlus.scss';

const Menu = ({isSwitch,All,Progress,Finish}) => {

    return(
        <div className="flex">
            <p className={isSwitch === ""  ? "my-course__menu my-course__menu--select" :"my-course__menu"} onClick={All}>Todos</p>
            <p className={isSwitch === "En curso" ? "my-course__menu my-course__menu--select" :"my-course__menu"} onClick={Progress}>En curso</p>
            <p className={isSwitch === "Finalizados" ? "my-course__menu my-course__menu--select" :"my-course__menu"} onClick={Finish}>Finalizados</p>
        </div>
)}
export default Menu;