import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { registerRequest } from '../actions'
import moment from "moment"

import Logo from '../assets/static/images/img/logo-log-in.png'
import Human from '../assets/static/images/svg/human-hello.svg'
import Arrow from '../assets/static/images/svg/arrow-right.svg'
import '../assets/styles/components/Register.scss';

const EMAIL_REGEX = new RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
)

const handleInput = event => {
  handleValidation(event.target)

  setValues({
    ...form,
    [event.target.name]: event.target.value
  })
}

const handleSubmit = event => {
  event.preventDefault()
  props.registerUser(form, '/login')
}

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
    birthday: '',
    server: 'LAS',
    verified: false,
    created_at: moment().format()
  })

  return (
      <section className="register">
          <img className="register__img" src={Logo} alt=""/>
          <div className="register__box">
            <div className="register__box__inside">
              <img className="register__box__inside__img" src={Human} alt=""/>
              <h1>Hola</h1>
              <h2>Lorem ipsum dolor sit amet.</h2>
              <form action="" >
                <div>
                  <h5>O registrate con tu correo electrónico</h5>
                  <input type="text" placeholder="tucorreo@gmail.com"/>
                </div>
                <div>
                  <h5>Contraseña</h5>
                  <input type="text" placeholder="Contraseña"/>
                </div>

                <button
                  class="btn__secundary btn__secundary--buy btn__secundary--register"
                  >
                  <div class="flex btn__arrow__buy">
                  <img src={Arrow} alt="" />
                  <p>Registrarme</p>
                  </div>
              </button>
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
