import React from 'react';
import ReactDOM from 'react-dom';
import Router0 from './r1/router/index'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './index.css'

ReactDOM.render(
    <Router>
        <Router0 />
    </Router>, 
    document.getElementById('root'),
);

if(module.hot){
    module.hot.accept();
}
