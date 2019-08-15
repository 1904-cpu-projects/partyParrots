import React from 'react';
import { connect } from 'react-redux';
import _Checkout from './CheckoutDumb';
import CheckoutForm from './CheckoutForm';

class Checkout extends React.Component {
  constructor(){
    super();
    this.state = {
      values: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: 'Alabama',
        zip: '',
      },
      errors: {},
    };

  }

  clear = () => {
    this.setState({
      values: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: 'Alabama',
        zip: '',
      }
    })
  };

  handleErrors = errors => {
    this.setState(state => ({
      ...state,
      errors
    }));
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(state => ({
      ...state,
      values: { ...state.values, [name]: value },
    }))
  };

  handleSubmit = async (ev) => {
    ev.preventDefault();

  };

  render(){
    const { handleSubmit, handleChange, clear, state } = this;

    return (
      <div>
        <CheckoutForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          clear={clear}
          {...state}
        />
      </div>
    )
  }
}


export default connect(
  null,
  null
  )(Checkout);
