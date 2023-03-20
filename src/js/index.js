import _ from 'lodash';
import './style.css';

class Component {
    constructor(innerHTML) {
        const element = document.createElement('div');
        element.innerHTML = innerHTML;

        return element;
    }
}

document.body.appendChild(new Component(
    _.join(['Hello', 'webpack'], ' ')
));

document.body.appendChild(new Component(
    window.location
));

document.body.appendChild(new Component(
    'log'
));

document.body.appendChild(new Component(
    "J'ai preseque fini pour ce soir et aujourd'hui. Je n'ai peut être pas fait grand chose, mais comme souvent cela m'a permit d'ouvrir les champs des possibles!"
));


