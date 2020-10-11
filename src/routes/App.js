import React from "react";
import {
  BrowserRouter,
  Switch,
  HashRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

import { connect } from "react-redux";

import { AnimatePresence } from "framer-motion";

import Home from "../containers/Home";
import Courses from "../containers/Courses";
import Course from "../containers/Course";
import Visualization from "../containers/Visualization";
import ShoppingCar from "../containers/ShoppingCar";
import Pay from "../containers/Pay";
import CourseBuyed from "../containers/CourseBuyed";
import MyCourse from "../containers/MyCourse";
import MyProfile from "../containers/MyProfile";
import ContactUs from "../containers/ContactUs";
import Politicy from "../containers/Politicy";
import Teacher from "../containers/Teacher";
import Register from "../containers/RegisterDefault";
import RegisterWithoutVerification from "../containers/RegisterWithoutVerification";
import Login from "../containers/Login";
import LoginDefault from "../containers/LoginDefault";
import AboutUs from "../containers/AboutUs";
import Podcast from "../containers/Podcast";
import NotFound from "../containers/NotFound";
import Youtube from "../containers/Youtube";
import ScrollToTop from "../Utils/scrollToTop";

const App = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  return (
    <Router>
      <AnimatePresence initial={false}>
        <ScrollToTop>
          <Switch>
            <Redirect exact from="/" to="/home" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/cursos" component={Courses} />
            <Route
              exact
              path="/cursos/:slugcategory/:slugcourse"
              component={Course}
            />
            <Route
              exact
              path="/cursos/:slugcategory/:slugname/:video_id"
              component={hasUser ? Visualization : Register}
            />
            <Route exact path="/carrito" component={ShoppingCar} />
            <Route exact path="/pago" component={Pay} />
            <Route
              exact
              path="/mis-cursos"
              component={hasUser ? MyCourse : Register}
            />
            <Route
              exact
              path="/mis-cursos/:slug"
              component={hasUser ? CourseBuyed : Register}
            />
            <Route
              exact
              path="/mi-perfil"
              component={hasUser ? MyProfile : Register}
            />
            <Route exact path="/contactanos" component={ContactUs} />
            <Route exact path="/politicas" component={Politicy} />
            <Route exact path="/enseña" component={Teacher} />
            <Route
              exact
              path="/registrarse"
              component={hasUser ? MyCourse : Register}
            />
            <Route
              exact
              path="/sin-confirmar-email"
              component={RegisterWithoutVerification}
            />
            <Route
              exact
              path="/iniciar-sesion"
              component={hasUser ? MyCourse : LoginDefault}
            />
            <Route exact path="/sobre-nosotros" component={AboutUs} />
            <Route exact path="/podcast" component={Podcast} />
            <Route exact path="/youtube" component={Youtube} />
            <Route component={NotFound} />
          </Switch>
        </ScrollToTop>
      </AnimatePresence>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user || {},
  };
};

export default connect(mapStateToProps, null)(App);
