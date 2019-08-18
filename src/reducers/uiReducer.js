import { TOGGLE_NAV } from '../actions/uiActions';

const initialState = {
  navOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAV: {
      return { ...state, navOpen: !state.navOpen };
    }
    default:
      return state;
  }
};
