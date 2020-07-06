import React,{useState} from 'react';

import '../../assets/styles/components/Data.scss';
import Button from '../../components/Utils/ButtonArrowRight'
import Check from '../../assets/static/images/svg/icon-check.svg'

import Success from '../Utils/SuccessMessage'


const Data = (props) => {

    const [isForm, SetIsForm]= useState({
        actualPassword: '',
        newPassword: '',
        newPasswordConfirmation: '',
    })

    const [isFormValidate, SetIsFormValidate]= useState({
        actualPasswordValidate: false,
        newPasswordValidate: false,
        newPasswordConfirmationValidate: false,
    })

    const handleChange = e => {
        
        SetIsForm({
            ...isForm,
            [event.target.name]: event.target.value
        })
        
        conditionalFormActual()
        
    }

    const conditionalFormActual = ()=> {

        const actualPassword = isForm.actualPassword

        if(actualPassword.length > 6 && /[A-Z]/.test(actualPassword)){
            SetIsFormValidate({actualPasswordValidate:true})
        }else{
            SetIsFormValidate({actualPasswordValidate:false})
        }

    }
    
    const handleSubmit = event => {
        event.preventDefault()
        // props.loginUser(form, '/perfil')
    }


    console.log(isFormValidate.actualPasswordValidate)

  return (
    <section className="data" onSubmit={handleSubmit}>
        <h4>Gestioná tus datos.</h4>
        <h5>Cambiar contraseña.</h5>
        <form action="">
            <input 
            name="actualPassword" 
            required 
            onChange={handleChange} 
            className="data__input__text" 
            type="password" 
            placeholder="Contraseña actual"/>
            {isFormValidate.actualPasswordValidate ? <img className="data__input__check" src={Check} alt=""/>:"" }
            
            
            <br/>

            <input name="newPassword" 
            required 
            onChange={handleChange} 
            className="data__input__text" 
            type="password" 
            placeholder="Nueva Contraseña"/>
            <img className="data__input__check" src={Check} alt=""/>

            <br/>

            <input name="newPasswordConfirmation"
            required onChange={handleChange} 
            className="data__input__text" 
            type="password" 
            placeholder="Confirmar Nueva Contraseña"/>
            <img className="data__input__check" src={Check} alt=""/>
            
            <br/>

            <Button text={"Guardar"} margin={"discovery__box__position btn__secundary--data"}/>

           <Success/>

        </form>
    </section>
)}
export default Data;