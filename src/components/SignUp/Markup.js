import React from 'react';

// eslint-disable-next-line complexity
const Markup = ({ handleSubmit, handleChange, clear, values, errors }) => {
  const { firstName, lastName, email, password } = values;

  return (
    <form onSubmit={handleSubmit}>
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
            value={firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user-plus" />
          </span>
        </div>
        {errors.firstName && errors.firstName.length && (
          <p className="help is-danger">{errors.firstName}</p>
        )}
      </div>

      <div className="field">
        <div className="control has-icons-left">
          <input
            className="input"
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user-plus" />
          </span>
        </div>
        {errors.lastName && errors.lastName.length && (
          <p className="help is-danger">{errors.lastName}</p>
        )}
      </div>

      <div className="field">
        <div className="control has-icons-left">
          <input
            className="input"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email Address"
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
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Create a Password"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-key" />
          </span>
        </div>
        {errors.password && errors.password.length && (
          <p className="help is-danger">{errors.password}</p>
        )}
      </div>

      <div className="field is-centered">
        <div className="has-text-centered">
          <button type="submit" className="button is-primary is-rounded">
            Sign up
          </button>
          <button type="button" className="button is-rounded" onClick={clear}>
            Clear
          </button>
        </div>
      </div>
    </form>
  );
};

export default Markup;
