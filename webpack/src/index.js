import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import dataStore from './stores/dataStore'

const root = document.createElement('div')
document.body.appendChild(root)

ReactDOM.render(
    <App dataStore={dataStore}/>,
    root
);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        let NewApp = require('./containers/App').default;
        ReactDOM.render(
            <NewApp dataStore={dataStore}/>,
            root
        );
    });
}