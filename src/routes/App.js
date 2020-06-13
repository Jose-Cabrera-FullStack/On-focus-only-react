import React from 'react';
import {BrowserRouter,Switch,HashRouter as Router,Route} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Header from '../components/Header'
import Footer from '../components/Footer'

const App = () => (
    <Router>
                <Header/>
            <Switch>
                <Route exact path="/" component={Home} />

            </Switch>

        <Footer/>
    </Router>
)

export default App;