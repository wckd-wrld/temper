import React, { Component } from 'react';
import './Home.css';
import test from '../img/test.jpg';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <img src={test}/>
        );
    }
}

export default Home;
