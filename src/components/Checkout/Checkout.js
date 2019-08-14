import React from 'react';
import { connect } from 'react-redux';
import _Checkout from './CheckoutDumb';

class Checkout extends Component {
  constructor () {
    super();
    this.state = {
      values: {

      },
      errors: {},
    }
  }

  handleChange(){

  }

  handleSubmit(){

  }

  clear() {

  }

  render() {

    return(
      <div>
        <_Checkout />
      </div>
    )
  }
}

export default connect(null, null)(Checkout);
