import React, {Component} from 'react';

import Welcome from './Welcome.jsx';
import Clock from './Clock.jsx';
import ActionLink from './ActionLink.jsx';
import Toggle from './Toggle.jsx';


class ComponentsLearning extends Component {
    render () {
        return (
            <div>
                <li>Welcom Component</li>
                <Welcome name="Sara" />
                <Welcome name="Cahal" />
                <Welcome name="Edite" />
                <li>Clock Component</li>
                <Clock />
                <li>ActionLink Component</li>
                <ActionLink />
                <li>Toggle Component</li>
                <Toggle />
            </div>
        );
    }
}

export default ComponentsLearning;

