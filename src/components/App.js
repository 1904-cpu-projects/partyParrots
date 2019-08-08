import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './UserLoginDumb';
import Nav from './Nav';
import Products from './Products'
import { HashRouter, Route } from 'react-router-dom';

class App extends Component{

    render(){
        return (
            <HashRouter>
                < Route path = "/" component = { Nav } />
                < Route exact path = "/login" component = { LoginForm } />
                < Route exact path = "/products" component = { Products } />
            </HashRouter>
        )
    }
}

export default connect ( null, null )( App );


