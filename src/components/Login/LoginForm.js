import React from 'react';

const Form = ({ values, errors, handleChange, handleSubmit, clear }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <div className="control has-icons-left">
          <input
            className="input"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope" />
          </span>
        </div>
        {errors.email && errors.email.length && (
          <p className="help is-danger">{errors.email}</p>
        )}
      </div>
      <div className="field">
        <div className="control has-icons-left">
          <input
            className="input"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <span className="icon is-small is-left">
            <i className="fas fa-key" />
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
      <div className="field is-centered">
        <div className="has-text-centered">
          <button type="submit" className="button is-primary is-rounded">
            Login
          </button>
          {' '}
          <button type="button" className="button is-rounded" onClick={clear}>
            Clear
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
