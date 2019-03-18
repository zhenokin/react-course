import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';

const createElementMethod = React.createElement('h1', null, 'The 1st method');
const jsxMethod = <h1>The 2nd method </h1>;

class ComponentMethod extends React.Component {
    render() {
        return (<h1>The 3d method</h1>);
    }
}

const functionalMethod = () => (<h1> The 4th method </h1>)

class PureComponentMethod extends React.PureComponent {
    render() {
        return (<h1>The 5th method</h1>);
    }
}

const app = <div>
    {createElementMethod}
    {jsxMethod}
    <ComponentMethod />
    <functionalMethod />
    <PureComponentMethod />
</div>

ReactDOM.render(app, document.getElementById('root'));