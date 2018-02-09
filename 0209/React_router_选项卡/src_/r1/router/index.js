import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import Home from './home'
import './index.css'


class Router0 extends React.Component {       
    render(){
        return (
            <Route path="/" component={Home}/>         
        )
    }    
}

export default Router0