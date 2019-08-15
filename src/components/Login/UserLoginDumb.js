import React, { Component } from 'react';
import axios from 'axios';
import Form from './LoginForm';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/user';

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        email: '',
        password: '',
      },
      errors: {},
    };
    this.clear = this.clear.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clear = () => {
    this.setState({
      values: {
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

  handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const res = await axios.put('/auth/local/login', {
        ...this.state.values,
      });

      if (res.data.error) {
        this.handleErrors(res.data.error);
      } else {
        this.props._loginUser(res.data)
        window.history.back()
      }
    } catch (err) {
      if (err.message.includes('401')) {
        this.handleErrors({ auth: 'Invalid email or password.' });
      } else {
        console.error(err);
      }
    }
  };

  render() {
    const { handleChange, handleSubmit, clear } = this;
    return (
      <section className="section">
        <div className="columns is-centered">
          <div className="column is-one-third">
            <div className="field is-centered">
              <div className="has-text-centered">
                <label className="is-size-3">Log In</label>
              </div>
            </div>
            <Form
              {...this.state}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              clear={clear}
            />
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    _loginUser: (user) => {
      dispatch(loginUser(user))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(UserLogin);
