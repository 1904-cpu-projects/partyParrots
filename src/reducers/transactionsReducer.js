import { GOT_TRANSACTIONS } from '../actions/transactions';
import { LOGOUT } from '../actions/user';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GOT_TRANSACTIONS: {
      return action.transactions;
    }
    case LOGOUT: {
      return [];
    }
    default:
      return state;
  }
};
