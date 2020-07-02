import React from 'react';

import '../../assets/styles/components/Utils.scss';


const Checkbox = (props) => {
  return (
        <label className="checkbox__container">Guardar mi tarjeta
            <input type="checkbox" /> 
        <span className="checkmark"></span>
        </label>
    
)}
export default Checkbox;
