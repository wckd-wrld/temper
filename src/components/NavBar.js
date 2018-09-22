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
                <Link class="nav-item" to="/">now</Link>
                <Link class="nav-item" to="/about">about</Link>
                <Link class="nav-item" to="/archive">archive</Link>
        </nav>
        );
    }
}

export default NavBar;
