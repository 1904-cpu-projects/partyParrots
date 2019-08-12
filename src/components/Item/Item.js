import { connect } from 'react-redux';
import {
  updateItem as _updateItem,
  deleteItem as _deleteItem,
} from '../../actions/orderItems';
import Item from './ItemDumb';

const mapDispatchToProps = dispatch => ({
  updateItem(id, quantity) {
    dispatch(_updateItem(id, quantity));
  },
  deleteItem(id) {
    dispatch(_deleteItem(id));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(Item);
