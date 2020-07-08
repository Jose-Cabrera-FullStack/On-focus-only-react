import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { registerRequest } from '../actions'
import moment from "moment"

import Button from '../components/Utils/ButtonArrowRight'

import Logo from '../assets/static/images/img/logo-log-in.png'
import Human from '../assets/static/images/svg/human-hello.svg'
import '../assets/styles/components/Register.scss';

const EMAIL_REGEX = new RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  )
const Register = (props) => {
  
const handleInput = event => {

  setForm({
    ...isForm,
    [event.target.name]: event.target.value
  })
}

const handleSubmit = event => {
  event.preventDefault()
  props.registerUser(isForm, '/login')
}
const [isForm, setForm] = useState({
  email: '',
  password: '',
})

console.log(isForm.email)
console.log(isForm.password)

  return (
      <section className="register">
          <img className="register__img" src={Logo} alt="Logo de On Focus"/>
          <div className="register__box">
            <div className="register__box__inside">
              <img className="register__box__inside__img" src={Human} alt="Imagen de Humano Saludando"/>
              <h1>Hola!</h1>
              <h2>Lorem ipsum dolor sit amet.</h2>
              <form onSubmit={handleSubmit} >
                <div>
                  <h5>O registrate con tu correo electrónico</h5>
                  <input 
                  required
                  name="email"
                  type="text" 
                  placeholder="tucorreo@gmail.com" 
                  onChange={handleInput}/>

                </div>
                <div>
                  <h5>Contraseña</h5>
                  <input 
                  required
                  name="password"
                  type="password" 
                  placeholder="Contraseña"
                  onChange={handleInput}/>
                </div>
                <Button margin={'btn__secundary--register'} text={'Registrarme'}/>
              </form>
            </div>

          </div>
      </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
