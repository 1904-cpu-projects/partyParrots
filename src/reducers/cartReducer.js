import { createSelector } from 'reselect';
import { GET_ITEMS, START_ITEM_REQ } from '../actions/orderItems';

const initialState = {
  items: [],
  makingRequest: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS: {
      const items = action.items;
      return { ...initialState, items, makingRequest: false };
    }
    case START_ITEM_REQ: {
      return { ...state, makingRequest: true };
    }
    default:
      return state;
  }
};

// Selectors

const itemsSelector = state => state.cart.items;

const _itemTotalsSelector = items =>
  items.map(({ purchasePrice, quantity }) => {
    const price = purchasePrice * quantity;
    const rounded = parseFloat(price.toFixed(2), 10);
    return rounded;
  });

const itemTotalSelector = createSelector(
  itemsSelector,
  _itemTotalsSelector
);

const cartTotal = itemTotals =>
  itemTotals.reduce((total, price) => total + price, 0);

export const cartTotalSelector = createSelector(
  itemTotalSelector,
  cartTotal
);
