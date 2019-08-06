import React from 'react';
import CreateUser from './CreateUser';
import LoginForm from './LoginForm/UserLoginDumb';

export default function App() {
  return (
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-half">
          <CreateUser />
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
