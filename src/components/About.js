import React, { Component } from 'react';
import './About.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper iaculis faucibus. Integer nisl massa, rutrum pellentesque ante et, aliquam efficitur mauris. Morbi ut ornare leo, in porttitor urna. Aenean vitae augue ac urna aliquam posuere. Sed ac rutrum nulla, ut posuere lorem. Vestibulum consectetur tristique metus. Morbi auctor turpis vitae tortor tincidunt, nec congue arcu mollis. Aliquam eu purus urna. Vivamus sit amet sem finibus, feugiat urna quis, fermentum sem. Vivamus ligula tellus, ultrices eu justo sollicitudin, maximus volutpat urna. Proin eu mattis tortor, eu ultrices nisi. Donec feugiat lorem fermentum metus posuere, id rutrum mi sollicitudin. Nam molestie, nulla blandit malesuada consectetur, neque velit ornare nisl, id tincidunt lacus est in leo. Pellentesque tempor porta iaculis. Integer tristique tellus quis dapibus molestie. Vestibulum consectetur nisi at bibendum ornare.
            </div>
        );
    }
}

export default About;
