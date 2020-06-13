import React from 'react';
// import {Link} from 'react-router-dom';
// import {connect} from 'react-redux';
// import { logoutRequest } from '../actions';
import Logo from '../assets/static/images/svg/logo-small.svg'
import Shopping from '../assets/static/images/svg/shopping-car.svg'


import '../assets/styles/components/Header.scss';

const Header = props => {
  
  // const { user= {} } = props;
  // const hasUser = Object.keys(user).length  >  0;

  // const handleLogout = () => {
  //   props.logoutRequest({});
  // };

  return(
  
    <header>
      <nav class="navbar">
        <figure class="grid-1">
          <img class="navbar__img" src={Logo} alt="" />
        </figure>
        <div class="grid-2 navbar__justify__self">
          <ol class="navbar__element__list">
            <li class="navbar__menu"><a href="#">Descubrir cursos</a></li>
            <li class="navbar__menu"><a href="#">About On Focus</a></li>
            <li class="navbar__menu navbar__menu--fix">
              <img
                src={Shopping}
                class="navbar__menu__shopping__cart"
                alt=""
              />
            </li>
            <li class="navbar__menu ">
              <button
                class="btn__primary btn__primary--login btn__primary--login-width"
              >
                Iniciar Sesion
              </button>
            </li>
            <li class="navbar__menu">

              <button class="btn__primary btn__primary--login">
                Registrarse
              </button>
            </li>
          </ol>
        </div>
      </nav>
    </header>
  );
};

export default Header;

// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//   };
// };

// const mapDispatchToProps = {
//   logoutRequest,
// };


// export default connect(mapStateToProps,mapDispatchToProps)(Header);
