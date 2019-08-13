import { connect } from 'react-redux';
import App from './AppDumb';
import { getItems } from '../../actions/orderItems';
import { fetchAllBeverages } from '../../actions/beverageActions';

const mapDispatchToProps = dispatch => ({
  fetchItems() {
    dispatch(getItems());
  },
  fetchBeverages: () => {
    dispatch(fetchAllBeverages());
  },
});

export default connect(
  null,
  mapDispatchToProps
)(App);
