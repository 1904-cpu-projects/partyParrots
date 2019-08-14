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

const QuantitySelector = ({ item, updateQuantity, showZero }) => {
  return (
    <div className="select">
      <select
        value={item.quantity}
        onChange={e => updateQuantity(item.id, parseInt(e.target.value, 10))}
        name="quantity"
      >
        {showZero && <Option number={0} />}
        <Option number={1} />
        {makeOptions(item.quantity, item.beverage.quantity)}
      </select>
    </div>
  );
};

export default QuantitySelector;
