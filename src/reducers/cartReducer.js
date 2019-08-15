import { createSelector } from 'reselect';
import { UPDATED_BEV } from '../actions/sharedConstants';
import {
  GET_ITEMS,
  GET_ITEM,
  UPDATED_ITEM,
  START_ITEM_REQ,
  DELETED_ITEM,
  MADE_ITEM,
} from '../actions/orderItems';
import { LOGOUT } from '../actions/user';

const initialState = {
  items: [],
  makingRequest: false,
};

// eslint-disable-next-line complexity
export default (state = initialState, action) => {
  switch (action.type) {
    case START_ITEM_REQ: {
      return { ...state, makingRequest: true };
    }
    case GET_ITEMS: {
      const items = action.items;
      return { ...state, items, makingRequest: false };
    }
    case GET_ITEM: {
      const items = [...state.items, action.item];
      return { ...state, items, makingRequest: false };
    }
    case MADE_ITEM: {
      const items = [...state.items, action.item];
      return { ...state, items, makingRequest: false };
    }
    case UPDATED_ITEM: {
      const items = state.items.map(item =>
        item.id === action.item.id ? action.item : item
      );
      return { ...state, items, makingRequest: false };
    }
    case DELETED_ITEM: {
      const items = state.items.filter(item => item.id !== action.id);
      return { ...state, items, makingRequest: false };
    }
    case UPDATED_BEV: {
      const items = state.items.map(item => {
        if (item.beverage.id === action.beverage.id) {
          return { ...item, beverage: action.beverage };
        } else {
          return item;
        }
      });
      return { ...state, items, makingRequest: false };
    }
    case LOGOUT: {
      return { ...state, makingRequest: false, items: [] };
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

export const inCartSelector = id => {
  return createSelector(
    itemsSelector,
    items => items.find(item => item.beverage.id === id)
  );
};
