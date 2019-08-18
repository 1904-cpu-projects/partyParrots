import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import GuestOnly from '../GuestOnly/GuestOnly';
import LoginForm from '../Login/UserLoginDumb';
import Nav from '../Nav/Nav';
import Products from '../Products';
import SignUp from '../SignUp/SignUp';
import ItemList from '../ItemList/ItemList';
import Home from '../Home';
import Checkout from '../Checkout/Checkout';
import Transactions from '../Transactions/Transactions';

class App extends Component {
  // fetching beverages here is temporary, but right spot for cart and user
  componentDidMount() {
    this.props.fetchMe();
    this.props.fetchItems();
  }

  render() {
    return (
      <HashRouter>
        <Nav />
        <GuestOnly exact={true} path="/login" component={LoginForm} />
        <GuestOnly exact={true} path="/signup" component={SignUp} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/cart" component={ItemList} />
        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/orders" component={Transactions} />
      </HashRouter>
    );
  }
}

export default App;
