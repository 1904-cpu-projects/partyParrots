import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Markup from './Markup';

const validateStatus = _status => {
  return (_status >= 200 && _status < 300) || _status === 401;
};

class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      values: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
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
        password: '',
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
      const res = await axios.post(
        '/auth/local/signup',
        {
          ...this.state.values,
        },
        { validateStatus }
      );

      if (res.data.error) {
        this.handleErrors(res.data.error);
      } else if (res.data.errors) {
        this.handleErrors(res.data.errors);
      } else {
        this.props._loginUser(res.data);
        this.props.history.goBack();
      }
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { handleSubmit, handleChange, clear, state } = this;

    return (
      <section className="section">
        <div className="columns is-centered">
          <div className="column is-one-third">
            <Markup
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              clear={clear}
              {...state}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(CreateUser);
