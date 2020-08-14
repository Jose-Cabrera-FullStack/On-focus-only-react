import React from "react";
import {
  BrowserRouter,
  Switch,
  HashRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
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
import Register from "../containers/RegisterWithPay";
import Login from "../containers/Login";
import AboutUs from "../containers/AboutUs";
import Podcast from "../containers/Podcast";
import NotFound from "../containers/NotFound";
import Youtube from "../containers/Youtube";

const App = () => (
  // Arreglar para produccion las rutas
  <Router>
    <AnimatePresence>
      <Switch>
        <Redirect exact from="/" to="/home" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/cursos" component={Courses} />
        <Route exact path="/cursos/:slug" component={Course} />
        <Route
          exact
          path="/cursos/:slugcategory/:slugname/:video_id"
          component={Visualization}
        />
        <Route exact path="/carrito" component={ShoppingCar} />
        <Route exact path="/pago" component={Pay} />
        <Route exact path="/mis-cursos" component={MyCourse} />
        <Route exact path="/mis-cursos/:slug" component={CourseBuyed} />
        <Route exact path="/mi-perfil" component={MyProfile} />
        <Route exact path="/contactanos" component={ContactUs} />
        <Route exact path="/politicas" component={Politicy} />
        <Route exact path="/enseña" component={Teacher} />
        {/* <Route exact path="/registrarse" component={Register} /> */}
        <Route exact path="/iniciar-sesion" component={Login} />
        <Route exact path="/sobre-nosotros" component={AboutUs} />
        <Route exact path="/podcast" component={Podcast} />
        <Route exact path="/youtube" component={Youtube} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  </Router>
);

export default App;
