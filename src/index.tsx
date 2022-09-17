import 'faralley-ui-kit/main.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'regenerator-runtime/runtime';
import App from './app/App';
import { ConfigProvider } from 'faralley-ui-kit';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './app/state/store';

// Generate root element and add it to the page
const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(
    <Provider store={store}>
        <ConfigProvider>
            <App />
        </ConfigProvider>
    </Provider>,
    root
);
