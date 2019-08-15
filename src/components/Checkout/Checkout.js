import React from 'react';
import { connect } from 'react-redux';
import _Checkout from './CheckoutDumb';

class Checkout extends React.Component {
  constructor(){
    super();
    this.state = {
      values: {},
      errors: {},
    };

  }

  clear = () => {
    return 'hi'
  };

  handleChange = () => {
    return 'hi'
  };

  handleSubmit = () => {
    return 'hi'
  };

  render(){
    return (
      <div>
        <_Checkout />
      </div>
    )
  }
}


export default connect(
  null,
  null
  )(Checkout);
