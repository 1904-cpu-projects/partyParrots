import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import axios from 'axios';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: 'AL',
        zip: '',
      },
      errors: {},
      isSubmitted: false,
    };
  }

  clear = ev => {
    ev.preventDefault();
    this.setState({
      values: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address1: '',
        address2: '',
        city: '',
        state: 'AL',
        zip: '',
      },
      errors: {},
    });
  };

  handleErrors = errors => {
    this.setState(state => ({
      ...state,
      errors,
    }));
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(state => ({
      ...state,
      values: { ...state.values, [name]: value },
    }));
  };

  handleSubmit = async ev => {
    ev.preventDefault();
    try {
      await axios.put('/api/orders/checkout', {
        ...this.state.values,
      });
      this.setState(state => ({
        ...state,
        isSubmitted: true,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  goToProducts = () => this.props.history.push('/products');

  render() {
    const { handleSubmit, handleChange, clear, goToProducts, state } = this;
    return (
      <div>
        <CheckoutForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          clear={clear}
          goToProducts={goToProducts}
          {...state}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const user = state.user.user ? state.user.user : {};
  return {
    user,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Checkout)
);
