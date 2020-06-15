import React from 'react';
import {BrowserRouter,Switch,HashRouter as Router,Route,Redirect} from 'react-router-dom';
import Home from '../containers/Home';
import Courses from '../containers/Courses';
import Course from '../containers/Course';
import Visualization from '../containers/Visualization';
import ShoppingCar from '../containers/ShoppingCar';
import Pay from '../containers/Pay';
import Login from '../containers/Login';
import Register from '../containers/Register';
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
            </Switch>
        <Footer/>
        
    </Router>
)

export default App;