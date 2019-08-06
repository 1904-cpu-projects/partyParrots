import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

const Form = ({ values, errors, handleChange, handleSubmit, clear }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label" htmlFor="email">
          Email:
        </label>
        <div className="control has-icons-left">
          <input
            className="input"
            name="email"
            type="email"
            placeholder="Email Address"
            value={values.email}
            onChange={handleChange}
          />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </div>
        {errors.email && errors.email.length && (
          <p className="help is-danger">{errors.email}</p>
        )}
      </div>
      <div className="field">
        <label className="label" htmlFor="password">
          Password:
        </label>
        <div className="control has-icons-left">
          <input
            className="input"
            name="password"
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faKey} />
          </span>
        </div>
        {errors.password && errors.password.length && (
          <p className="help is-danger">{errors.password}</p>
        )}
      </div>
      {errors.auth && errors.auth.length && (
        <div className="field">
          <p className="help is-danger">{errors.auth}</p>
        </div>
      )}
      <div className="field is-grouped">
        <div className="control">
          <button type="submit" className="button is-link">
            Login
          </button>
        </div>
        <div className="control">
          <button type="button" className="button is-text" onClick={clear}>
            Clear
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
