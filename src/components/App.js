import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import LoginForm from './UserLoginDumb';
import Nav from './Nav';
import SelectCat from './FilterForm/SelectCat/SelectCat';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Nav} />
        <Route path="/products/:category/:search?" component={SelectCat} />

        <Route exact path="/login" component={LoginForm} />
      </Fragment>
    );
  }
}

export default withRouter(
  connect(
    null,
    null
  )(App)
);
