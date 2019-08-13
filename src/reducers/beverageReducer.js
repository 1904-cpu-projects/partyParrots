import { FETCH_ALL_BEVERAGES, UPDATED_BEV } from '../actions/sharedConstants';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ALL_BEVERAGES:
      return action.payload;
    case UPDATED_BEV: {
      return state.map(beverage =>
        beverage.id === action.beverage.id ? action.beverage : beverage
      );
    }
    default:
      return state;
  }
}
