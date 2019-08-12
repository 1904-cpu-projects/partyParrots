import { connect } from 'react-redux';
import { getItems } from '../../actions/orderItems';
import { cartTotalSelector } from '../../reducers/cartReducer';
import ItemList from './ItemListDumb';

const mapStateToProps = state => {
  const { items, makingRequest } = state.cart;
  return {
    items,
    makingRequest,
    total: cartTotalSelector(state),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchItems() {
    dispatch(getItems());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);
