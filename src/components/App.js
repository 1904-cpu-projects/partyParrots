import React from 'react';
import CreateUser from './CreateUser';

export default function App() {
  return (
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-half">
          <CreateUser />
        </div>
      </div>
    </section>
  );
}
