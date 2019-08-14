import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
<<<<<<< HEAD
import LoginForm from '../UserLoginDumb';
import Nav from '../Nav';
import Products from '../Products';
import CreateUser from '../CreateUser';
import ItemList from '../ItemList/ItemList';

class App extends Component {
  // fetching beverages here is temporary, but right spot for cart 
  componentDidMount() {
=======
import GuestOnly from '../GuestOnly/GuestOnly';
import LoginForm from '../Login/UserLoginDumb';
import Nav from '../Nav/Nav';
import Products from '../Products';
import SignUp from '../SignUp/SignUp';
import ItemList from '../ItemList/ItemList';

class App extends Component {
  // fetching beverages here is temporary, but right spot for cart and user
  componentDidMount() {
    this.props.fetchMe();
>>>>>>> dev
    this.props.fetchItems();
    this.props.fetchBeverages();
  }

  render() {
    return (
      <HashRouter>
        <Route path="/" component={Nav} />
<<<<<<< HEAD
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={CreateUser} />
=======
        <GuestOnly exact={true} path="/login" component={LoginForm} />
        <GuestOnly exact={true} path="/signup" component={SignUp} />
>>>>>>> dev
        <Route exact path="/products" component={Products} />
        <Route exact path="/cart" component={ItemList} />
      </HashRouter>
    );
  }
}

export default App;
