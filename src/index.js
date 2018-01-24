// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// import { AppRegistry } from 'react-native';
// import App from './App';


// NOTE:: https://code.visualstudio.com/docs/nodejs/reactjs-tutorial
import React from 'react';
// import { Text, AppRegistry } from 'react-native';

// Create a component called 'App'
// Component is a Javascript function that returns some amount of JSX.
const App = () =>  (
        // this line is JSX.
        // Text is an element.
        // element is inside a component.
        // this gets converted into: React.createElement.
        <h1> Some text </h1>
);

/**
 * Register a component 'app' to application 'albums'
 */
AppRegistry.registerComponent('albums', () => App);


