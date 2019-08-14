import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import GuestOnly from '../GuestOnly/GuestOnly';
import LoginForm from '../Login/UserLoginDumb';
import Nav from '../Nav/Nav';
import Products from '../Products';
import SignUp from '../SignUp/SignUp';
import ItemList from '../ItemList/ItemList';
import Checkout from '../Checkout/Checkout';

class App extends Component {
  // fetching beverages here is temporary, but right spot for cart and user
  componentDidMount() {
    this.props.fetchMe();
    this.props.fetchItems();
    this.props.fetchBeverages();
  }

  render() {
    return (
      <HashRouter>
        <Route path="/" component={Nav} />
        <GuestOnly exact={true} path="/login" component={LoginForm} />
        <GuestOnly exact={true} path="/signup" component={SignUp} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/cart" component={ItemList} />
        <Route exact path="/checkout" component={Checkout} />
      </HashRouter>
    );
  }
}

export default App;
