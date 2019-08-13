import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import LoginForm from '../UserLoginDumb';
import Nav from '../Nav';
import Products from '../Products';
import CreateUser from '../CreateUser';
import ItemList from '../ItemList/ItemList';

class App extends Component {
  // fetching beverages here is temporary, but right spot for cart 
  componentDidMount() {
    this.props.fetchItems();
    this.props.fetchBeverages();
  }

  render() {
    return (
      <HashRouter>
        <Route path="/" component={Nav} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={CreateUser} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/cart" component={ItemList} />
      </HashRouter>
    );
  }
}

export default App;
