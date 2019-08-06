import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserPlus,
  faEnvelope,
  faKey,
} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(ev) {
    ev.preventDefault();

    // add functions here to execute on submit

    // reset the form after submit:
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  }

  handleChange(ev) {
    ev.preventDefault();
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field is-centered">
          <div className="has-text-centered">
            <label className="is-size-3">Sign up today!</label>
          </div>
        </div>

        <div className="field">
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              placeholder="First Name"
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faUserPlus} />
            </span>
          </div>
        </div>

        <div className="field">
          <div className="control has-icons-left">
            <input
              className="input"
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              placeholder="Last Name"
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faUserPlus} />
            </span>
          </div>
        </div>

        <div className="field">
          <div className="control has-icons-left">
            <input
              className="input"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Email Address"
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </div>
        </div>

        <div className="field">
          <div className="control has-icons-left">
            <input
              className="input"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Create a Password"
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faKey} />
            </span>
          </div>
        </div>

        <div className="field">
          <div className="has-text-centered">
            <button
              className="button is-rounded is-centered is-primary"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  null
)(CreateUser);
