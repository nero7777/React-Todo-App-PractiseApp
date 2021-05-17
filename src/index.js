import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Contact from './components/Contact';
import About from "./components/About";
import NotFound from "./components/NotFound";
import {Link , Route , Switch , BrowserRouter as Router } from "react-router-dom";


ReactDOM.render(

    
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route  path="/about" component={About} />
            <Route  path="/contact" component={Contact} />
            <Route component={NotFound} />
        </Switch>
    </Router>
,
document.getElementById("root")
);

