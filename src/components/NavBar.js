import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom'

class NavBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <nav>
                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/archive"> Archive </Link>
        </nav>
        );
    }
}

export default NavBar;
