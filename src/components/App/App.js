import { connect } from 'react-redux';
import App from './AppDumb';
import { getItems } from '../../actions/orderItems';
import { fetchAllBeverages } from '../../actions/beverageActions';
import { getMe } from '../../actions/user';

const mapDispatchToProps = dispatch => ({
  fetchItems() {
    dispatch(getItems());
  },
  fetchBeverages: () => {
    dispatch(fetchAllBeverages());
  },
  fetchMe() {
    dispatch(getMe());
  },
});

export default connect(
  null,
  mapDispatchToProps
)(App);
