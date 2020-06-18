import React from 'react';
import {BrowserRouter,Switch,HashRouter as Router,Route,Redirect} from 'react-router-dom';
import Home from '../containers/Home';
import Courses from '../containers/Courses';
import Course from '../containers/Course';
import Visualization from '../containers/Visualization';
import ShoppingCar from '../containers/ShoppingCar';
import Pay from '../containers/Pay';
import PayCongratulation from '../containers/PayCongratulation';
import CourseBuyed from '../containers/CourseBuyed';
import MyCourse from '../containers/MyCourse';
import MyProfile from '../containers/MyProfile';
import ContactUs from '../containers/ContactUs';
import Politicy from '../containers/Politicy';
import Teacher from '../containers/Teacher'; 
import Register from '../containers/Register';
import Login from '../containers/Login';
import AboutUs from '../containers/AboutUs';
import NotFound from '../containers/NotFound';
import Header from '../components/Header'
import Footer from '../components/Footer'

const App = () => (
    // Arreglar para produccion las rutas
    <Router>
        <Header/>
            <Switch>
                <Redirect exact from="/" to="/home" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/cursos" component={Courses} />
                <Route exact path="/curso" component={Course} />
                <Route exact path="/curso/:id" component={Visualization} />
                <Route exact path="/carrito" component={ShoppingCar} />
                <Route exact path="/pago" component={Pay} />
                <Route exact path="/adquirido" component={PayCongratulation} />
                <Route exact path="/curso-comprado" component={CourseBuyed} />
                <Route exact path="/mi-curso" component={MyCourse} />
                <Route exact path="/mi-perfil" component={MyProfile} />
                <Route exact path="/contactanos" component={ContactUs} />
                <Route exact path="/politicas" component={Politicy} />
                <Route exact path="/enseña" component={Teacher} />
                <Route exact path="/registrarse" component={Register} />
                <Route exact path="/iniciar-sesion" component={Login} />
                <Route exact path="/sobre-nosotros" component={AboutUs} />
            </Switch>
        <Footer/>
        
    </Router>
)

export default App;