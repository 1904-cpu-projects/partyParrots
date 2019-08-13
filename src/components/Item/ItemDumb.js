import React from 'react';

const Option = ({ number }) => <option value={number}>{number}</option>;

const makeOptions = (currentQuantity, quantity) => {
  const options = [];
  let i = 2;

  while (i < 11 && i <= currentQuantity + quantity) {
    options.push(<Option key={i} number={i} />);
    i++;
  }

  return options;
};

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
          <p>$ {item.beverage.price}</p>
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
          <p className="control">
            <div className="select">
              <select
                value={item.quantity}
                onChange={e =>
                  updateItem(item.id, parseInt(e.target.value, 10))
                }
                name="quantity"
              >
                <Option number={1} />
                {makeOptions(item.quantity, item.beverage.quantity)}
              </select>
            </div>
          </p>
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
