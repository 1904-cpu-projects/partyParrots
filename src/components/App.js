import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import Nav from './Nav';
import { HashRouter, Route } from 'react-router-dom';

class App extends Component{
    
    render(){
        return ( 
            <HashRouter>
                < Route path = "/" component = { Nav } />
                < Route exact path = "/login" component = { LoginForm } />
            </HashRouter>
        )  
    }  
}

export default connect ( null, null )( App );


