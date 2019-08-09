import FETCH_ALL_BEVERAGES from '../actions/constants';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ALL_BEVERAGES:
      return action.payload;

    default:
      return state;
  }
}
