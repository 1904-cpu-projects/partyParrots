import { connect } from 'react-redux';
import QuantitySelector from './QuantitySelectorDumb';
import { updateItem } from '../../actions/orderItems';

const mapDispatchToProps = dispatch => ({
  updateQuantity(id, quantity) {
    dispatch(updateItem(id, quantity));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(QuantitySelector);
