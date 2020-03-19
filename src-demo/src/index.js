import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import AppHeader from './Header/Header';
import { BrowserRouter as Router } from 'react-router-dom'
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById('root'));
// registerServiceWorker();