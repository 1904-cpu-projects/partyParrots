import React from 'react';
import { connect } from 'react-redux';

const _UserLogin = ({ handleSubmit }) => {
  return <form id='userLogin' onSubmit={ handleSubmit }>
    <label>
      User Email:
      <input type='email' name='email' required />
    </label>
    <label>
      Password:
      <input type='text' name='password' required />
    </label>
    <input type='submit' value="Login" />
  </form>
}

const clearForm = () => {
  document.getElementById('userLogin').reset();
}

const mapStateToProps = () => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (ev) => {
      const user = {
        email: event.target.email.value,
        password: event.target.password.value
      }
      ev.preventDefault();
      clearForm()
      //TODO: handle dispatch for user
    }
  }
}

const UserLogin = connect(mapStateToProps, mapDispatchToProps)(_UserLogin);

export default UserLogin;
