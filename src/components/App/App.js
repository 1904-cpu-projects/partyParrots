import { connect } from 'react-redux';
import App from './AppDumb';
import { getItems } from '../../actions/orderItems';
import { getMe } from '../../actions/user';

const mapDispatchToProps = dispatch => ({
  fetchItems() {
    dispatch(getItems());
  },
  fetchMe() {
    dispatch(getMe());
  },
});

export default connect(
  null,
  mapDispatchToProps
)(App);
