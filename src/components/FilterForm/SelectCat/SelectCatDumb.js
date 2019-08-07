import React from 'react';
import { BeverageCategories } from '../../../../utils/index';

const SelectCatDumb = ({ changeCategory }) => {
  return (
    <div className="field">
      <label className="label" htmlFor="categories">
        Categories
      </label>
      <div className="control has-icons-left">
        <div className="select">
          <select
            name="categories"
            onChange={e => changeCategory(e.target.value)}
          >
            <option value="All">Categories</option>
            {BeverageCategories.map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="icon is-small is-left">
          <i className="fas fa-beer" />
        </div>
      </div>
    </div>
  );
};

export default SelectCatDumb;
