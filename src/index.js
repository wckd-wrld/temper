import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import Home from './components/Home';
import About from './components/About';
import Archive from './components/Archive';

import NavBar from './components/NavBar';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';


ReactDOM.render(
    <Router>
        <div>
            <span class='guide' id="top-left">+</span>
            <span class='guide' id="top-right">+</span>
            <NavBar/>
            <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
            >
                    <Route exact path="/" component={Home} class="content"/>
                    <Route exact path="/about" component={About} class="content"/>
                    <Route exact path="/archive" component={Archive} class="content"/>

                </AnimatedSwitch>
            <span class='guide' id="bottom-left">+</span>
            <span class='guide' id="bottom-right">+</span>
        </div>
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();
