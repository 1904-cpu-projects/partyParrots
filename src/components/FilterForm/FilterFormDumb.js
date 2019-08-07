import React from 'react';
import { BeverageCategories } from '../../../utils/backend';

const Select = () => (
  <div className="field">
    <div className="control has-icons-left">
      <div className="select">
        <select>
          <option>All</option>
          {BeverageCategories.map(cat => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="icon is-small is-left">
        <i className="fas fa-globe" />
      </div>
    </div>
  </div>
);

const FilterForm = () => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <Select />
    </form>
  );
};
