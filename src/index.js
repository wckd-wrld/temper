import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from 'components/Home'
import About from 'components/About'
import Archive from 'components/Archive'

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';



ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/archive" component={Archive} />
        </div>
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();
