import React from 'react';
import QuantitySelector from '../QuantitySelector/QuantitySelector';

const Item = ({ item, updateItem, deleteItem }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
      }}
      className="list-item"
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div className="content">
          {/* make beverage name a link to single bev modal route */}
          <p>
            {item.beverage.name} by {item.beverage.manufacturer}
          </p>
          <p>$ {item.beverage.price} ea.</p>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div className="field is-grouped">
          <div className="control">
            <QuantitySelector item={item} showZero={false} />
          </div>
          <p className="control">
            <button
              className="button is-danger"
              type="button"
              onClick={() => deleteItem(item.id)}
            >
              Delete
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
