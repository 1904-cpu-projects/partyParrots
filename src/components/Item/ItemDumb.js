import React from 'react';
import QuantitySelector from '../QuantitySelector/QuantitySelector';

const Item = ({ item, deleteItem, display }) => {
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
            {display ? (
              <div className="select">
                <select readOnly={true} value={item.quantity}>
                  <option value={item.quantity}>{item.quantity}</option>
                </select>
              </div>
            ) : (
              <QuantitySelector
                display={display}
                item={item}
                showZero={false}
              />
            )}
          </div>
          {!display && (
            <p className="control">
              <button
                className="button is-danger"
                type="button"
                onClick={() => deleteItem(item.id)}
              >
                Delete
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
