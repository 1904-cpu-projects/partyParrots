import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import LoginForm from '../Login/UserLoginDumb';
import Nav from './Nav/Nav';
import Products from '../Products';
import SignUp from '../SignUp/SignUp';
import ItemList from '../ItemList/ItemList';

class App extends Component {
  // fetching beverages here is temporary, but right spot for cart
  componentDidMount() {
    this.props.fetchMe();
    this.props.fetchItems();
    this.props.fetchBeverages();
  }

  render() {
    return (
      <HashRouter>
        <Route path="/" component={Nav} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/cart" component={ItemList} />
      </HashRouter>
    );
  }
}

export default App;
