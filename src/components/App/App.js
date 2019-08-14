import { connect } from 'react-redux';
import App from './AppDumb';
import { getItems } from '../../actions/orderItems';
import { fetchAllBeverages } from '../../actions/beverageActions';
<<<<<<< HEAD
=======
import { getMe } from '../../actions/user';
>>>>>>> dev

const mapDispatchToProps = dispatch => ({
  fetchItems() {
    dispatch(getItems());
  },
  fetchBeverages: () => {
    dispatch(fetchAllBeverages());
  },
<<<<<<< HEAD
=======
  fetchMe() {
    dispatch(getMe());
  },
>>>>>>> dev
});

export default connect(
  null,
  mapDispatchToProps
)(App);
