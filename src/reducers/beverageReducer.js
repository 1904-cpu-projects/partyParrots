import { GOT_BEVS } from '../actions/beverages';

export default function(state = [], action) {
  switch (action.type) {
    case GOT_BEVS: {
      return action.beverages;
    }
    default:
      return state;
  }
}
